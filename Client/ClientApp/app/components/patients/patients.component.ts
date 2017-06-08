import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Patient } from '../../shared/models/patient';

@Component({
    selector: 'patients',
    templateUrl: './patients.component.html'
})

export class PatientsComponent {
    ngOnInit() {

    }
}