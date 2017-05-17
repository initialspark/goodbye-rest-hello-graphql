import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

interface QueryResponse {
    patient
    loading
}

interface PatientDetail {
    nhsNumber: string;
    surname: string;
    firstName: string;
    gender: string;
    dateOfBirth: string;
    medications: PatientMedication[];
}

interface PatientMedication {
    name: string;
    dose: string;
    start: string;
    end: string;
    isActive: boolean;
}

@Component({
    selector: 'patientsummary',
    styleUrls: ['./patient.summary.component.css'],
    templateUrl: './patient.summary.component.html'
})
export class PatientSummaryComponent {
    public patient: PatientDetail;
    public loading: boolean;
    id: string;

    constructor(private apollo: Apollo, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];

            this.apollo.watchQuery<QueryResponse>({
                query: gql` query { patient(nhsNumber:"${this.id}"){firstName, surname, nhsNumber, gender, dateOfBirth, medications{name,dose,start,end,isActive}}}`
            }).subscribe(({ data }) => {
                this.loading = data.loading;
                this.patient = data.patient;
            });
        });

    }
}