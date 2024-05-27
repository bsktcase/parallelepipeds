// src/endpoints/ipeds/academic-year-room-board-other.ts

import { EducationDataClient } from '../../client';

export class AcademicYearRoomBoardOther {
    private client: EducationDataClient;

    constructor(client: EducationDataClient) {
        this.client = client;
    }

    public async getAcademicYearRoomBoardOther(params?: Record<string, unknown>): Promise<any> {
        const endpoint = 'ipeds/academic-year-room-board-other/2022/';
        return this.client.makeRequest(endpoint, params);
    }
}
