import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Resa2Component } from './resa2/resa2.component';
import { Resa1Component } from './resa1/resa1.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProvidersFeature } from '@angular/core/src/render3';
import { ModifResaComponentComponent } from './modif-resa-component/modif-resa-component.component';

@NgModule({
  declarations: [
    AppComponent,
    Resa2Component,
    Resa1Component,
    ModifResaComponentComponent,
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
      //   component: QuiSommesNous
      // },
      {
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
      { path: '/accueil',
      component: Accueil // erreur car component accueil à creer
    },

    { path: '', // path vide va vers l'accueil
      component: Accueil
  }

    ])
    ],
  providers: [],
  bootstrap: [AppComponent]
 })
export class AppModule { }

