// src/client.ts

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export class EducationDataClient {
    private api: AxiosInstance;

    // this is the UnitId for UW-Seattle; if UW ceases to exist I'm confident I'd know about it
    // we'll use this to limit the data returned by year-checking until we find a better option
    public knownGoodUnitId: '236948';

    constructor(baseURL: string = 'https://educationdata.urban.org/api/v1/college-university/') {
        this.api = axios.create({
            baseURL: baseURL,
        });
    }

    public async makeRequest(endpoint: string, params?: Record<string, unknown>): Promise<AxiosResponse> {
        try {
            const response = await this.api.get(endpoint, { params });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    private handleError(error: any): void {
        if (axios.isAxiosError(error)) {
            console.error('Error message:', error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}
