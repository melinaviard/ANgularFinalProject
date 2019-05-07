import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ResaServiceService } from '../services/resa-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-modif-resa2',
  templateUrl: './modif-resa2.component.html',
  styleUrls: ['./modif-resa2.component.css']
})
export class ModifResa2Component implements OnInit {

  reservation: Reservation;

  constructor(private resaService: ResaServiceService, private router: Router, private route: ActivatedRoute) {
    this.reservation = Reservation.createBlank();
    console.log(this.reservation);
   }

   ngOnInit(): void { // ici on fait appel à la methode qui consomme webservice
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getResaById(parseInt(params.get('reservation_id'), 10));
  });
}// Fin OnInit


  // tslint:disable-next-line:variable-name
  public getResaById(id_reservation: number): void {
    this.resaService.findById(id_reservation).subscribe((response) => {
      this.reservation = response;
      console.log(this.reservation);
    });
  }

  // bouton modif
public updateReservation(reservation: Reservation): void {
  this.resaService.updateReservation(this.reservation).subscribe(
    (response) => {
      this.router.navigateByUrl('reservation/' + this.reservation.id_reservation);
    }
  );
}

// bouton supprimer
public deleteReservation(): void {
  this.resaService.deleteReservation(this.reservation).subscribe(
    (response) => {
      this.router.navigateByUrl('/modifResa');
    }
  );
}

// bouton retour
public goBack(): void {
  this.router.navigateByUrl('reservation/' + this.reservation.id_reservation);
}

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



}
