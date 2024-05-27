// src/endpoints/ipeds/admissions-requirements.ts

import { EducationDataClient } from '../../client';

export class AdmissionsRequirements {
    private client: EducationDataClient;

    constructor(client: EducationDataClient) {
        this.client = client;
    }

    public async getAdmissionsRequirements(params?: Record<string, unknown>): Promise<any> {
        const endpoint = 'ipeds/admissions-requirements/2022/';
        return this.client.makeRequest(endpoint, params);
    }
}
