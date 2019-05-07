import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ResaServiceService } from '../services/resa-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-modif-resa-component',
  templateUrl: './modif-resa-component.component.html',
  styleUrls: ['./modif-resa-component.component.css']
})
export class ModifResaComponentComponent implements OnInit {

  // // tslint:disable-next-line:variable-name
  // resa_in_progress: Reservation;


  @Output()
  reservSearchClick: EventEmitter<number> = new EventEmitter();
  reservation: Reservation;
  // tslint:disable-next-line:variable-name
  id_reservation: number;
  nomPrenom: string;
  constructor(private resaService: ResaServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reservation = Reservation.createBlank();
  }
  public getResaById(id_reservation: number): void {
    this.resaService.findById(id_reservation).subscribe((response) => {
      this.reservation = response;
      console.log(this.reservation);
    });
  }

public updateReservation(reservation: Reservation): void {
  this.resaService.updateReservation(this.reservation).subscribe(
    (response) => {
      this.router.navigateByUrl('reservation/:reservation_id');
    }
  );
}

  // tslint:disable-next-line:variable-name
  public chercherResa(): void {

    // this.reservSearchClick.emit(this.id_reservation);
    this.router.navigateByUrl('reservation/' + this.id_reservation);
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


  // "chercherResaClient($event)

}
