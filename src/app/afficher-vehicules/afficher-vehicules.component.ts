import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vehicule } from '../model/vehicule';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-afficher-vehicules',
  templateUrl: './afficher-vehicules.component.html',
  styleUrls: ['./afficher-vehicules.component.css']
})
export class AfficherVehiculesComponent {

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();

  @Input()
  vehicule: Vehicule;

  constructor(private route: ActivatedRoute, private router: Router) { }



 public choisirVehicule(): void {
    this.userClick.emit(this.vehicule.id_vehicule),
    this.router.navigateByUrl('vehicule/findbyid/' + this.vehicule.id_vehicule);
  }

}
