import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

interface QueryResponse {
    patient
    loading
}

interface PatientMedication {
    name: string;
    dose: string;
    prescribedOn: string;
}

@Component({
    selector: 'patient-medication',
    templateUrl: './patient.medication.component.html'
})
export class PatientMedicationComponent {
    public patientMedications: PatientMedication[];
    public loading: boolean;
    id: string;

    constructor(private apollo: Apollo, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];

            this.apollo.query<QueryResponse>({
                query: gql` query { patient(nhsNumber:"${this.id}"){medications{name,dose,prescribedOn}}}`
            }).subscribe(({ data }) => {
                this.loading = data.loading;
                this.patientMedications = data.patient.medications;
            });
        });
    }
}