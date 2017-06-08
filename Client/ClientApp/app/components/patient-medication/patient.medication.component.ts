import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { PatientMedication } from '../../shared/models/medication';

@Component({
    selector: 'patient-medication',
    templateUrl: './patient.medication.component.html'
})
export class PatientMedicationComponent {
    ngOnInit() {
    }
}