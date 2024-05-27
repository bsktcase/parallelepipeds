// src/endpoints/ipeds/academic-year-tuition.ts

import { EducationDataClient } from '../../client';

export class AcademicYearTuition {
    private client: EducationDataClient;

    constructor(client: EducationDataClient) {
        this.client = client;
    }

    public async getAcademicYearTuition(params?: Record<string, unknown>): Promise<any> {
        const endpoint = 'ipeds/academic-year-tuition/2022/';
        return this.client.makeRequest(endpoint, params);
    }
}
