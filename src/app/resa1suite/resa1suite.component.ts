import { Component, OnInit, Input, Directive, Self, InjectionToken } from '@angular/core';
import { VehiculeService } from '../services/vehiculeservice.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ResaServiceService } from '../services/resa-service.service';
import { Vehicule } from '../model/vehicule';
import { Reservation, Client, Agence } from '../model/reservation';
import { FormControl, NgControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/primeng';



@Component({
  selector: 'app-resa1suite',
  templateUrl: './resa1suite.component.html',
  styleUrls: ['./resa1suite.component.css']
})
export class Resa1suiteComponent implements OnInit {

  reservation: Reservation;

  vehicules: Vehicule[];
  vehicule: Vehicule;

  client: Client;
  agences = [
    new Agence('Lyon' ),
    new Agence('Paris' ),
    new Agence('Brest' ),
    new Agence('Marseille' ),
    new Agence('Strasbourg' ),
    new Agence('Lille' ),
    new Agence('Bourges' ),
    new Agence('Clermont' ),
    new Agence('Tulle' )
  ];
  myagence = this.agences[0];

  constructor(private route: ActivatedRoute, private router: Router,
              private vehiculeService: VehiculeService, private ResaService: ResaServiceService) {
    this.reservation = Reservation.createBlank();
    this.client = Client.createBlank();
    console.log(this.reservation);
    console.log(this.agences);


  }


  // show() {
  //   this.msgs.push({severity: 'success', summary: 'Info Message', detail: 'PrimeNG rocks'});
  // }


  public callMe(): void {
    console.log(this.reservation.agenceDebut);

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getVehiculesById(parseInt(params.get('id_vehicule'), 10));
      console.log('id_vehicule');
    });

    // // pour validators
    // this.control.valueChanges.pipe(
    //   untilDestroyed(this)
    // ).subscribe(() => {
    //   const controlErrors = this.control.errors;
    //   if (controlErrors) {
    //     const firstKey = Object.keys(controlErrors)[0];
    //     const getError = this.errors[firstKey];
    //     const text = getError(controlErrors[firstKey]);
    //   }
    // });
  }

  public getVehiculesById(id: number): void {
    this.vehiculeService.getVehiculesById(id).subscribe((response) => {
      this.vehicule = response;
      console.log(this.vehicule);
    });
  }


  findVehiculeById(id: number): Vehicule {
    for (const vehicule of this.vehicules) {
      if (vehicule.id_vehicule === id) {
        return vehicule;
      }
    }
    return null;
  }



  public addResa(reservation: Reservation): void {
    this.reservation.vehicule = this.vehicule;
    this.ResaService.createResa(this.reservation).subscribe(
      (response) => {
        this.router.navigateByUrl('');
      }
    );
  }

  public goBack(): void {
    this.router.navigateByUrl('louerVehicule');
  }




}
