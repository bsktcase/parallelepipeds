// src/endpoints/ipeds/directory.ts

import { EducationDataClient } from '../../client';

export class Directory {
    private client: EducationDataClient;
    private baseURL: string;
    private year: number;

    constructor(client: EducationDataClient, baseURL: string = 'ipeds/directory', year: number = new Date().getFullYear() - 2) {
        this.client = client;
        this.baseURL = baseURL;
        this.year = year;
    }

    setYear(year: number) {
        this.year = year;
    }

    getYear(): number {
        return this.year;
    }

    // this is a heinously inefficient way to get this info from them, but I don't see a better option on their API
    // we're trying to limit the damage by querying for a known unitid instead of all 6200 institutions
    // i really thought their summaries requests would work for this but summaries URLs are all broken 502 atm,
    // even their own docs' examples
    async checkYear(year: number): Promise<boolean> {
        try {
            this.setYear(year);
            const data = await this.getDirectoryById(this.client.knownGoodUnitId);
            console.log(year, ': ', data.results.length);
            return data.results.length > 0;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                return false;
            } else {
                console.error(`Error checking year ${year}:`, error.message);
                throw error;
            }
        }
    }

    // each endpoint can potentially have different most recent years, so we have to do this check separately
    // for every one, rearchitect this to be reusable tho - either pass in the class or use some kind of interface or both
    async findMostRecentYear(startYear: number): Promise<number> {
        let year = startYear;

        while (true) {
            const hasData = await this.checkYear(year);
            if (hasData) {
                console.log(`Data found for year ${year}`);
                return year;
            } else {
                year--;
            }
        }
    }

    public async getDirectory(params?: Record<string, unknown>): Promise<any> {
        const endpoint = `${this.baseURL}/${params.year}/`;
        return this.client.makeRequest(endpoint, params);
    }

    async getDirectoryById(id: string): Promise<any> {
        const params = { year: this.year, unitid: id };
        return this.getDirectory(params);
    }

    async getDirectoryByState(fipsStateCode: number): Promise<any> {
        const params = { year: this.year, fips: fipsStateCode };
        // console.log(params);
        return this.getDirectory(params);
    }
}
