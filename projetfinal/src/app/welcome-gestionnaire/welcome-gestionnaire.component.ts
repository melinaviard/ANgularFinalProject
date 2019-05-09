import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-gestionnaire',
  templateUrl: './welcome-gestionnaire.component.html',
  styleUrls: ['./welcome-gestionnaire.component.css']
})
export class WelcomeGestionnaireComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
public goListeVehicule() {
this.router.navigateByUrl('/vehicule');
}

public goAccueil(){
  this.router.navigateByUrl('');
  }
}

