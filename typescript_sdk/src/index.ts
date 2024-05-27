// src/index.ts

import { EducationDataClient } from './client';
import { Directory } from './endpoints/ipeds/directory';
import { InstitutionalCharacteristics } from './endpoints/ipeds/institutional-characteristics';
import { AdmissionsEnrollment } from './endpoints/ipeds/admissions-enrollment';
import { AdmissionsRequirements } from './endpoints/ipeds/admissions-requirements';
import { AcademicYearTuition } from './endpoints/ipeds/academic-year-tuition';
import { AcademicYearRoomBoardOther } from './endpoints/ipeds/academic-year-room-board-other';
import { EnrollmentFTEUndergraduate } from './endpoints/ipeds/enrollment-fte-undergraduate';
import { StudentFacultyRatio } from './endpoints/ipeds/student-faculty-ratio';
import { FinancialAidGrantsAndNetPrice } from './endpoints/ipeds/sfa-grants-and-net-price';
import { FinancialAidFirstTimeFullTimeUndergraduates } from './endpoints/ipeds/sfa-ftft';

export { EducationDataClient, Directory, InstitutionalCharacteristics, AdmissionsEnrollment, AdmissionsRequirements, AcademicYearTuition, AcademicYearRoomBoardOther, EnrollmentFTEUndergraduate, StudentFacultyRatio, FinancialAidGrantsAndNetPrice, FinancialAidFirstTimeFullTimeUndergraduates };
