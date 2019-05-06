import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../model/vehicule';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { VehciuleService } from '../serviceVehicule/vehciule-service';
import { VehiculeServiceService } from '../vehicule-service.service';

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.css']
})
export class VehiculeDetailsComponent implements OnInit {
vehicule: Vehicule;
vehicules: Vehicule[];

  constructor(private router: Router, private route: ActivatedRoute, private vehiculeService: VehiculeServiceService,
              private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
    this.getVehiculeById(parseInt(params.get('id_vehicule'), 10));
    });
  }

  findVehiculeById(id: number): Vehicule {
    for (const vehicule of this.vehicules) {
      if ( vehicule.id_vehicule === id) {
        return vehicule;
      }
    }
    return null;
  }

  goBackButtonPressed(): void {
    this.location.back();
  }
public editButtonPressed(): void {
  this.router.navigateByUrl('editnewvehicule/' + this.vehicule.id_vehicule);
}

public deleteButtonPressed(): void {
  this.vehiculeService.deleteVehicule(this.vehicule).subscribe((response) => {
    this.router.navigateByUrl('/vehicule');
  });
}

public getVehiculeById(id: number): void {
  this.vehiculeService.getVehiculeById(id).subscribe((response) => {
    this.vehicule = response;
  });
}

}
