// src/endpoints/ipeds/student-faculty-ratio.ts

import { EducationDataClient } from '../../client';

export class StudentFacultyRatio {
    private client: EducationDataClient;

    constructor(client: EducationDataClient) {
        this.client = client;
    }

    public async getStudentFacultyRatio(params?: Record<string, unknown>): Promise<any> {
        const endpoint = 'ipeds/student-faculty-ratio/2022/';
        return this.client.makeRequest(endpoint, params);
    }
}
