import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Resa2Component } from './resa2/resa2.component';
import { Resa1Component } from './resa1/resa1.component';
import { HttpClientModule } from '@angular/common/http';
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
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    Resa2Component,
    Resa1Component,
    ModifResaComponentComponent,
    AccueilComponent,
    ModifierResaComponent,
    ModifResa2Component,
    AfficherVehiculesComponent,
    Resa1suiteComponent,
    PrintErrorComponent,
  ],
  imports: [
    BrowserModule,
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
    RouterModule.forRoot([
      // Paths resa
      {
        path: 'reservation/addreservation',
        // ici pas d'id, ce qui veut dire qu'on a cliqué sur ajout
        component: Resa2Component
      },

      // 2 eme path modifresa
     { path: 'reservation/:reservation_id',
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
      { path: 'accueil',
      component: AccueilComponent
    },

    { path: '', // path vide va vers l'accueil
      component: AccueilComponent
  },
  // 3eme path modif resa
{ path: 'reservation/update/:reservation_id',
component: ModifResa2Component}
    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
 })
export class AppModule { }



platformBrowserDynamic().bootstrapModule(AppModule);
