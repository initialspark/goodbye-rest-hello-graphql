import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
    selector: 'patientsummary',
    styleUrls: ['./patient.summary.component.css'],
    templateUrl: './patient.summary.component.html'
})
export class PatientSummaryComponent {
    ngOnInit() {
    }
}