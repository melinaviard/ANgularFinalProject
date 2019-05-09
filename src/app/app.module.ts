import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { ProvidersFeature } from '@angular/core/src/render3';
import { ModifResaComponentComponent } from './modif-resa-component/modif-resa-component.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ModifierResaComponent } from './modifier-resa/modifier-resa.component';
import { HttpModule } from '@angular/http';
import { ModifResa2Component } from './modif-resa2/modif-resa2.component';
import { AfficherVehiculesComponent } from './afficher-vehicules/afficher-vehicules.component';
import { Resa1suiteComponent } from './resa1suite/resa1suite.component';
import { PrintErrorComponent } from './print-error/print-error.component';
import { DemoMaterialModule } from '../../material-module';
import { MatNativeDateModule } from '@angular/material';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CarouselModule } from 'primeng/carousel';
import { TopPageComponent } from './top-page/top-page.component';

import { WelcomeGestionnaireComponent } from './welcome-gestionnaire/welcome-gestionnaire.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DataViewModule } from 'primeng/dataview';
import { FootPageComponent } from './foot-page/foot-page.component';





@NgModule({
  declarations: [
    AppComponent,
    Resa1Component,
    Resa2Component,
    ModifResaComponentComponent,
    AccueilComponent,
    ModifierResaComponent,
    ModifResa2Component,
    AfficherVehiculesComponent,
    Resa1suiteComponent,
    PrintErrorComponent,
    VehiculeListComponent,
    VehiculeSummaryComponent,
    VehiculeDetailsComponent,
    EditNewVehiculeComponent,
    WelcomeGestionnaireComponent,
    TopPageComponent,
    FootPageComponent
  ],
  imports: [
    BrowserModule,
    InputTextareaModule,
    CardModule,
    ScrollPanelModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    CalendarModule,
    MessagesModule,
    MessageModule,
    CarouselModule,
    ButtonModule,
    FieldsetModule,
    HttpClientModule,
    PanelModule,
    DataViewModule,
    RouterModule.forRoot([
      // Paths resa
      {
        path: 'reservation/addreservation',
        component: Resa2Component
      },

      // 2 eme path modifresa
      {
        path: 'reservation/:reservation_id',
        component: ModifierResaComponent
      },

      {
        path: 'louerVehicule',
        component: Resa1Component
      },
      // suite :
      {
        path: 'vehicule/findbyid/:id_vehicule',
        component: Resa1suiteComponent
      },
      // {
      //   path: 'contact',
      //   component: ContactComponent
      // },
      // {
      //   path: 'infos',
      //   component: QuiSommesNous
      // },
      { // 1er path modif ressa
        path: 'modifResa',
        component: ModifResaComponentComponent
      },
      // {
      //   path: 'login',
      //   component: Login
      // },
      // {
      //   path: 'creerCompte',
      //   component: CreerCompte
      // },
      // {
      //   path: 'agences',
      //   component: Agences
      // },
      {
        path: 'accueil',
        component: AccueilComponent
      },

      {
        path: '', // path vide va vers l'accueil
        component: AccueilComponent
      },
      // 3eme path modif resa
      {
        path: 'reservation/update/:reservation_id',
        component: ModifResa2Component
      },

      {
    path: 'addVehicule',
    component: EditNewVehiculeComponent
  },
  {
    path: 'vehicule/:id_vehicule',
    component: VehiculeDetailsComponent
  },

  {
    path: 'welcomegestionnaire',
    component: WelcomeGestionnaireComponent
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
  // tslint:disable-next-line:align
  providers: [],
  bootstrap: [AppComponent]
 })
export class AppModule { }



platformBrowserDynamic().bootstrapModule(AppModule);
