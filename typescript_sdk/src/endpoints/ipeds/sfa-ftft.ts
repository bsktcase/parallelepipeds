// src/endpoints/ipeds/sfa-ftft.ts

import { EducationDataClient } from '../../client';

export class FinancialAidFirstTimeFullTimeUndergraduates {
    private client: EducationDataClient;

    constructor(client: EducationDataClient) {
        this.client = client;
    }

    public async getFinancialAidFirstTimeFullTimeUndergraduates(params?: Record<string, unknown>): Promise<any> {
        const endpoint = 'ipeds/sfa-ftft/2022/';
        return this.client.makeRequest(endpoint, params);
    }
}
