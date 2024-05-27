// src/endpoints/ipeds/directory.ts

import { EducationDataClient } from '../../client';

export class Directory {
    private client: EducationDataClient;

    constructor(client: EducationDataClient) {
        this.client = client;
    }

    public async getDirectory(params?: Record<string, unknown>): Promise<any> {
        const endpoint = 'ipeds/directory/2022/';
        return this.client.makeRequest(endpoint, params);
    }
}
