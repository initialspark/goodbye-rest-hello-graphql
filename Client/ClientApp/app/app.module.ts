import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientSummaryComponent } from './components/patientsummary/patientsummary.component';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:5050/graphql/'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        PatientsComponent,
        PatientSummaryComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'patients', component: PatientsComponent },
            { path: 'patients/:id', component: PatientSummaryComponent },
            { path: '**', redirectTo: 'home' }
        ]),
         ApolloModule.forRoot(provideClient)
    ]
})
export class AppModule {
}
