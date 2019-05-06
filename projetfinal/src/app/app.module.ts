import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Resa2Component } from './resa2/resa2.component';
import { Resa1Component } from './resa1/resa1.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculeListComponent } from './vehicule-list/vehicule-list.component';
import { VehiculeSummaryComponent } from './vehicule-summary/vehicule-summary.component';
import { VehiculeDetailsComponent } from './vehicule-details/vehicule-details.component';
import { EditNewVehiculeComponent } from './edit-new-vehicule/edit-new-vehicule.component';
import { RouterModule } from '@angular/router';
import { ModifResaComponentComponent } from './modif-resa/modif-resa-component.component';
import { WelcomeGestionnaireComponent } from './welcome-gestionnaire/welcome-gestionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    Resa2Component,
    Resa1Component,
    VehiculeListComponent,
    VehiculeSummaryComponent,
    VehiculeDetailsComponent,
    EditNewVehiculeComponent,
    WelcomeGestionnaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // Paths resa
      {
        path: 'reservation/addreservation',
        // ici pas d'id, ce qui veut dire qu'on a cliqué sur ajout
        component: Resa2Component
      },
      {
        path: 'louerVehicule',
        component: Resa1Component
      },
      // {
      //   path: 'contact',
      //   component: ContactComponent
      // },
      // {
      //   path: 'infos',
      //   component: Resa1Component
      // },
     // {
     //   path: 'modifResa',
     //   component: ModifResaComponentComponent
     // },
      // {
      //   path: 'login',
      //   component: Login
      // },
      {
        path: 'addVehicule',
        component: EditNewVehiculeComponent
      },
      {
        path: 'vehicule/:id_vehicule',
        component: VehiculeDetailsComponent
      },
      {
        path: '',
        redirectTo: '/vehicule',
        pathMatch: 'full'
      },
      {
        path: 'vehicule',
        component: VehiculeListComponent
      },
      {
        path: 'editnewvehicule/:id_vehicule',
        component: EditNewVehiculeComponent
      }
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
