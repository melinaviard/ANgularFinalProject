import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResaServiceService } from '../services/resa-service.service';
import { Vehicule, VehiculesDispo } from '../model/vehicule';

@Component({
  selector: 'app-resa1',
  templateUrl: './resa1.component.html',
  styleUrls: ['./resa1.component.css']
})
export class Resa1Component implements OnInit {

  // tslint:disable-next-line:variable-name
  resa_in_progress: Reservation;
  // tslint:disable-next-line:variable-name
  vehicule_recherche: Vehicule;
  VehiculesDispo: Vehicule[];
  // Ci-dessus, et dans vehicule j'ai crée une liste de vehicules à retourner, je ne sais pas is c'est la peine, à voir par la suite ...

  constructor(private reservationService: ResaServiceService, private router: Router, private route: ActivatedRoute) {
    this.resa_in_progress = Reservation.createBlank();
    console.log(this.resa_in_progress);
  }


  ngOnInit() { // Ici je n'ai pas mis de mode access car ne dépend pas du mode access
  }

 // Ci-dessous : les methodes lorsqu'on appuie sur les boutons pour choisir agence de debut, de fin, les dates... dans le 1er form de resa
  addAgenceDebutPressed(): void {
    this.resa_in_progress.agenceDebut = null;
  }
    // Infos de la resa
    addAgenceFinPressed(): void {
      this.resa_in_progress.agenceFin = null;
    }
      addDateDebutPressed(): void {
        this.resa_in_progress.dateDebut = null;
      }
        addDateFinPressed(): void {
          this.resa_in_progress.dateFin = null;
        }

      // Infos du vehicule recherché
          addTypePressed(): void {
            this.vehicule_recherche.type = null;
          }

            addNombrePlacesPressed(): void {
              this.vehicule_recherche.nombrePlaces = null;
            }

              addMarquePressed(): void {
               this.vehicule_recherche.marque = null;
            }


          public addResa(reservation: Reservation): void {
            this.reservationService.createResa
            (this.resa_in_progress).subscribe(
              (response) => {
                this.router.navigateByUrl('/accueil');
              }
            );
          }


            // A faire :
// Faire Resa 1 html

// + dans resa 2
// Faire methode Login() + addResa + goInfos path: 'infos' + goAgences path: 'agences'
// + en fonction du modeaccess modif form
// + dans html Afficher vehicules qui collent avec le vehicule recherché, l'agence de départ et les dates

         // + Reprendre resa 1 et resa 2 : terminer, verifier

        // + Faire voir ou modifier resa

     // + Ces methodes : à mettre dans voir ou modifier resa
        // public updateRecipe(recipe: Recipe): void {
        //   this.recipeService.updateRecipe(this.recipe_in_progress).subscribe(
        //     (response) => {
        //       this.router.navigateByUrl('/recipes');
        //     }
        //   );
        // }
        // public addUpdateResaClicked(): void {
        //   this.updateResa(this.resa_in_progress);
        //   this.addResa(this.resa_in_progress);
        //   }
}
