// src/endpoints/ipeds/institutional-characteristics.ts

import { EducationDataClient } from '../../client';

export class InstitutionalCharacteristics {
    private client: EducationDataClient;

    constructor(client: EducationDataClient) {
        this.client = client;
    }

    public async getInstitutionalCharacteristics(params?: Record<string, unknown>): Promise<any> {
        const endpoint = 'ipeds/institutional-characteristics/2022/';
        return this.client.makeRequest(endpoint, params);
    }
}
