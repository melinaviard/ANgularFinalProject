import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResaServiceService } from '../services/resa-service.service';
import { Reservation, Client } from '../model/reservation';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resa2',
  templateUrl: './resa2.component.html',
  styleUrls: ['./resa2.component.css']
})
export class Resa2Component implements OnInit {

client: Client;
// tslint:disable-next-line:variable-name
resa_in_progress: Reservation;
  // tslint:disable-next-line:variable-name
  mode_access: string; // pour differencier si login ou non
form: FormGroup;
reservation: Reservation;

  // tslint:disable-next-line:variable-name
  constructor( private resaService: ResaServiceService,
               private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        
      // this.form = new FormGroup({
      //   nom: new FormControl(this.client.nom, [
      //     Validators.required,
      //     Validators.minLength(2),
      // ]),
      //   prenom: new FormControl(this.client.prenom, [
      //     Validators.required,
      //     Validators.minLength(2),
      // ]),
      //   annee: new FormControl(this.client.anneePermis, [
      //     Validators.required,
      //     Validators.minLength(4),
      // ]),
      //   mail: new FormControl(this.client.mail, [
      //     Validators.required,
      //     Validators.minLength(4),
      // ]),
      //   telephone: new FormControl(this.client.telephone, [
      //     Validators.required,
      //     Validators.minLength(10),
      // ]),
      //   adresse: new FormControl(this.client.adresse, [
      //     Validators.required,
      //     Validators.minLength(10),
      // ])

      // });

    }

    get nom() { return this.form.get('nom'); }
    get prenom() { return this.form.get('prenom'); }
    get anneePermis() { return this.form.get('anneePermis'); }
    get adresse() { return this.form.get('adresse'); }
    get mail() { return this.form.get('mail'); }
    get telephone() { return this.form.get('telephone'); }


 public addResa(reservation: Reservation): void {
   this.resaService.createResa(this.resa_in_progress).subscribe(
     (response) => {
       this.router.navigateByUrl('');
     }
   );
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
 
  // Faire methode Login() + addResa + goInfos path: 'infos' + goAgences path: 'agences'
// + en fonction du modeaccess modif form
// + à faire p. voir ou modifier resa
}
