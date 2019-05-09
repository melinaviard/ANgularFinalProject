import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResaServiceService } from '../services/resa-service.service';
import { Vehicule } from '../model/vehicule';
import { VehiculeService } from '../services/vehiculeservice.service';


@Component({
  selector: 'app-resa1',
  templateUrl: './resa1.component.html',
  styleUrls: ['./resa1.component.css']
})


export class Resa1Component implements OnInit {

vehicules: Vehicule[];

Onevehicule: Vehicule;

constructor(private router: Router,  private vehiculeService: VehiculeService ) {
  this.getAllVehicule();

  this.Onevehicule = Vehicule.createBlank();




}


ngOnInit() {
}

public getAllVehicule(): void {
  this.vehiculeService.getAllVehicule().subscribe((response) => {
    this.vehicules = response;
    console.log(this.vehicules) ;
  });
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

