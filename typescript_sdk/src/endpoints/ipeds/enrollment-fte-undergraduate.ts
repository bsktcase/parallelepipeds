// src/endpoints/ipeds/enrollment-fte-undergraduate.ts

import { EducationDataClient } from '../../client';

export class EnrollmentFTEUndergraduate {
    private client: EducationDataClient;

    constructor(client: EducationDataClient) {
        this.client = client;
    }

    public async getEnrollmentFTEUndergraduate(params?: Record<string, unknown>): Promise<any> {
        const endpoint = 'ipeds/enrollment-full-time-equivalent/2021/undergraduate/';
        return this.client.makeRequest(endpoint, params);
    }
}
