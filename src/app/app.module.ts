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
import { AccueilComponent } from './accueil/accueil.component';
import { ModifierResaComponent } from './modifier-resa/modifier-resa.component';
import { HttpModule } from '@angular/http';
import { ModifResa2Component } from './modif-resa2/modif-resa2.component';


@NgModule({
  declarations: [
    AppComponent,
    Resa2Component,
    Resa1Component,
    ModifResaComponentComponent,
    AccueilComponent,
    ModifierResaComponent,
    ModifResa2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
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


