import { Component } from '@angular/core';
import { Reservation } from './model/reservation';
import { Vehicule } from './model/vehicule';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
reservation: Reservation;
vehicule: Vehicule;
}
