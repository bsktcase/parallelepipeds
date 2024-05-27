// src/endpoints/ipeds/admissions-enrollment.ts

import { EducationDataClient } from '../../client';

export class AdmissionsEnrollment {
    private client: EducationDataClient;

    constructor(client: EducationDataClient) {
        this.client = client;
    }

    public async getAdmissionsEnrollment(params?: Record<string, unknown>): Promise<any> {
        const endpoint = 'ipeds/admissions-enrollment/2022/';
        return this.client.makeRequest(endpoint, params);
    }
}
