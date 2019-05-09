import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vehicule } from '../model/vehicule';

@Component({
  selector: 'app-vehicule-summary',
  templateUrl: './vehicule-summary.component.html',
  styleUrls: ['./vehicule-summary.component.css']
})
export class VehiculeSummaryComponent {

  @Input()
  vehicule: Vehicule;

  @Output()
  userClick: EventEmitter<number> = new EventEmitter();
  constructor() { }

  userClicked() {
    this.userClick.emit(this.vehicule.id_vehicule);
  }



}
