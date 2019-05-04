import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResaServiceService } from '../services/resa-service.service';
import { Vehicule } from '../model/vehicule';

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
  // vehicules: Vehicules[];

  constructor(private reservationService: ResaServiceService, private router: Router, private route: ActivatedRoute) {
    this.resa_in_progress = Reservation.createBlank();
    console.log(this.resa_in_progress);
  }


  ngOnInit() { // Ici je n'ai pas mis de mode access car ne dépend pas du mode access
  }

  addAgenceDepartPressed(): void {
    this.resa_in_progress.agenceDebut.push({ agenceDebut: null });
  }
    // Infos de la resa
    addAgenceFinPressed(): void {
      this.resa_in_progress.agenceFin.push({ agenceFin: null });
    }
      addDateDebutPressed(): void {
        this.resa_in_progress.dateDebut.push({ dateDebut: null });
      }
        addDateFinPressed(): void {
          this.resa_in_progress.dateFin.push({ dateFin: null });
        }

      // Infos du vehicule recherché
          addTypePressed(): void {
            this.vehicule_recherche.type.push({ type: null });
          }

            addNombrePlacesPressed(): void {
              this.vehicule_recherche.nombreplaces.push({ nombrePlace: null } );
            }

              addMarquePressed(): void {
                                    this.vehicule_recherche.marque.push({ vehicule.marque: null } );
            }
                // ecrire methode addResa
    //  public addUpdateRecipeClicked(): void {
    //     this.updateRecipe(this.recipe_in_progress);
    //   
    //     this.addRecipe(this.recipe_in_progress);
    //   }
    // }
    // Creer methode add vehicule selectionné à la resa       
    // dans html Afficher vehicules qui collent avec le vehicule recherché, l'agence de départ et les dates
          }
