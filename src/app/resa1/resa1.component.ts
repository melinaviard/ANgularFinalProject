import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResaServiceService } from '../services/resa-service.service';
import { Vehicule, VehiculesDispo } from '../model/vehicule';
import { VehiculeService } from '../services/vehiculeservice.service';


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


  // tslint:disable-next-line:max-line-length
  constructor( private vehiculeService: VehiculeService, private reservationService: ResaServiceService, private router: Router, private route: ActivatedRoute) {
    this.resa_in_progress = Reservation.createBlank();
    console.log(this.resa_in_progress);
  }


  ngOnInit() { // Ici je n'ai pas mis de mode access car ne dépend pas du mode access
  }

 // Ci-dessous : les methodes lorsqu'on appuie sur les boutons pour choisir agence de debut, de fin, les dates... dans le 1er form de resa
  // Infos de la resa
 addAgenceDebut(): void {
    this.resa_in_progress.agenceDebut = null;
  }
   
    addAgenceFin(): void {
      this.resa_in_progress.agenceFin = null;
    }
      addDateDebut(): void {
        this.resa_in_progress.dateDebut = null;
      }
        addDateFin(): void {
          this.resa_in_progress.dateFin = null;
        }

      // Infos du vehicule recherché
          addType(): void {
            this.vehicule_recherche.type = null;
          }

            addNombrePlaces(): void {
              this.vehicule_recherche.nombrePlaces = null;
            }

              addMarque(): void {
               this.vehicule_recherche.marque = null;
            }

            
            public goResa2(): void {
              this.router.navigateByUrl('/reservation/addreservation');
            }

            
        public callType(nombrePlaces: any ) {
          return this.vehiculeService.getVehiculeByNombrePlaces(nombrePlaces);
          console.log(this.VehiculesDispo);
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





  // Boutons du menu
  // Accueil
  public goAccueil(): void {
    this.router.navigateByUrl('');
  }
   // LouerVehicule
   public goResa(): void {
    this.router.navigateByUrl('louerVehicule');
  }
   // Contact
   public goContact(): void {
    this.router.navigateByUrl('contact');
  }
   // QuiSommesNous
   public goQuisommesnous(): void {
    this.router.navigateByUrl('infos');
  }
  // Voir ou Modifier Resa
  public goUpdateResa(): void {
    this.router.navigateByUrl('modifResa');
  }
   // se loger
   public goLogin(): void {
    this.router.navigateByUrl('login');
  }

   // creer un compte
   public goCreerCompte(): void {
    this.router.navigateByUrl('creerCompte');
  }

  // A faire : 
  // addAgenceDebut()
}

