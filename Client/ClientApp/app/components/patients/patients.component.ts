import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

interface QueryResponse {
    allPatients
    loading
}

interface Patient {
    nhsNumber: string;
    surname: string;
    firstName: string;
}

@Component({
    selector: 'patients',
    templateUrl: './patients.component.html'
})

export class PatientsComponent {
    public patients: Patient[];
    loading: boolean;

    constructor(private apollo: Apollo) { }

    ngOnInit() {
        this.apollo.watchQuery<QueryResponse>({
            query: gql` query { allPatients{firstName, surname, nhsNumber}}`
        }).subscribe(({ data }) => {
            this.loading = data.loading;
            this.patients = data.allPatients;
        });
    }
}