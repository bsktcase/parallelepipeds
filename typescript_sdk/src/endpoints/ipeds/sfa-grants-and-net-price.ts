// src/endpoints/ipeds/sfa-grants-and-net-price.ts

import { EducationDataClient } from '../../client';

export class FinancialAidGrantsAndNetPrice {
    private client: EducationDataClient;

    constructor(client: EducationDataClient) {
        this.client = client;
    }

    public async getFinancialAidGrantsAndNetPrice(params?: Record<string, unknown>): Promise<any> {
        const endpoint = 'ipeds/sfa-grants-and-net-price/2022/';
        return this.client.makeRequest(endpoint, params);
    }
}
