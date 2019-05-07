import { Vehicule } from '../model/vehicule';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehiculeServiceService } from '../vehicule-service.service';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css']
})
export class VehiculeListComponent implements OnInit {

  new_vehicule: Vehicule;

  vehicules: Vehicule[];


  constructor(private router: Router, private vehciuleService: VehiculeServiceService) {
  this.new_vehicule = Vehicule.createBlank();
  this.getAllVehicules();
}
  ngOnInit() {
  }

  public getAllVehicules(): void {
    this.vehciuleService.getAllVehicule().subscribe((response) => {
      this.vehicules = response;
      console.log(this.vehicules);
    });
  }
public addVehiculeClicked() {
  this.vehicules.unshift(this.new_vehicule);
  this.new_vehicule = Vehicule.createBlank();
}

addNewVehiculePressed(): void {
  this.router.navigateByUrl('/addVehicule');
}
userClickedOnVehicule(id_vehicule): void {
  this.router.navigateByUrl('/vehicule/' + id_vehicule);
}

}
