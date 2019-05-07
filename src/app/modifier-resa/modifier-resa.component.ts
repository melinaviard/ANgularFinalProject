import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ResaServiceService } from '../services/resa-service.service';
import { Reservation } from '../model/reservation';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-modifier-resa',
  templateUrl: './modifier-resa.component.html',
  styleUrls: ['./modifier-resa.component.css']
})
export class ModifierResaComponent implements OnInit {
reservation: Reservation;

  constructor(private route: ActivatedRoute, private router: Router,
              private resaServiceService: ResaServiceService ) { }

  ngOnInit(): void { // ici on fait appel à la methode qui consomme webservice
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getResaById(parseInt(params.get('reservation_id'), 10));
  });
}


public getResaById(id_reservation: number): void {
  this.resaServiceService.findById(id_reservation).subscribe((response) => {
    this.reservation = response;
    console.log(this.reservation);
  });
}

public goModifResa2(reservation: Reservation): void {
  this.router.navigateByUrl('reservation/update/' + this.reservation.id_reservation );
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

  public goUpdapteResa2(): void {
    this.router.navigateByUrl('modifResa2');
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
