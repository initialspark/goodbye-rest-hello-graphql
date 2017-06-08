import { PatientMedication } from './medication';

export class Patient {
    nhsNumber: string;
    surname: string;
    firstName: string;
    gender: string;
    dateOfBirth: string;
    medications: PatientMedication[];
}

