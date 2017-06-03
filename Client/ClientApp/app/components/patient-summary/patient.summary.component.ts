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
    public genderIcon: String;

    constructor(private apollo: Apollo, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];

            this.apollo.query<QueryResponse>({
                query: gql` query { patient(nhsNumber:"${this.id}"){firstName, surname, nhsNumber, gender, dateOfBirth}}`
            }).subscribe(({ data }) => {
                this.loading = data.loading;
                this.patient = data.patient;

                this.genderIcon = data.patient.gender === 'MALE'
                    ?
                    require('../../../../wwwroot/img/male-icon.png')
                    :
                    require('../../../../wwwroot/img/female-icon.png');
            });
        });
    }
}