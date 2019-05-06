import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../model/vehicule';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VehciuleService } from '../serviceVehicule/vehciule-service';

@Component({
  selector: 'app-edit-new-vehicule',
  templateUrl: './edit-new-vehicule.component.html',
  styleUrls: ['./edit-new-vehicule.component.css']
})
export class EditNewVehiculeComponent implements OnInit {
new_vehicule: Vehicule;
mode_access: string;

  constructor(private router: Router, private route: ActivatedRoute, private vehiculeService: VehciuleService) {
    this.new_vehicule= Vehicule.createBlank();
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id_vehicule') != null) {
        this.mode_access = 'MODIFICATION';
        this.vehiculeService.getVehiculeById(parseInt(params.get('id_vehicule'), 10)).subscribe((response) => {
          this.new_vehicule = response;
        });
      } else {
        this.mode_access = 'AJOUT';
      }
    });
  }

  public updateVehicule(vehicule: Vehicule): void {
    this.vehiculeService.updateVehicule(this.new_vehicule).subscribe((response) => {
      this.router.navigateByUrl('/vehicule');
    });
  }
  public addVehicule(vehicule: Vehicule): void {
    this.vehiculeService.addVehicule(this.new_vehicule).subscribe((response) => {
      this.router.navigateByUrl('/vehicule');
    });
  }

  public addUpdateVehiculeClicked(): void {
    if (this.mode_access === 'MODIFICATION') {
      this.updateVehicule(this.new_vehicule);
    } else {
      this.addVehicule(this.new_vehicule);
    }
  }
}
