import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicule } from '../model/vehicule';


const RECIPE_SERVER = 'http://localhost:8080'; 

@Injectable({providedIn: 'root'})

export class VehciuleService {

  httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getAllVehicule(): Observable<any> {
    return this.http.get<Vehicule>(RECIPE_SERVER + '/vehicule/all_vehicule');
  }
public deleteVehicule(vehicule: Vehicule): Observable<any> {
  return this.http.delete<Vehicule>(RECIPE_SERVER + '/vehicule/deletevehicule/' + vehicule.id_vehicule,
  this.httpOptions);
}
public getVehiculeById(id: number): Observable<any> {
  return this.http.get<Vehicule>(RECIPE_SERVER + '/vehicule/findbyid/' + id);
}
public addVehicule(vehicule: Vehicule): Observable<any> { //2 arguments min dans une requete post. Ici on en a mis 3 : 
  return this.http.post<Vehicule>(RECIPE_SERVER + '/vehicule/addVehicule', JSON.stringify(vehicule), this.httpOptions);
}

public updateVehicule(vehicule: Vehicule): Observable<any> {
  return this.http.put<Vehicule>(RECIPE_SERVER + '/vehicule/update', JSON.stringify(vehicule), this.httpOptions);
}

public getVehiculeByType(vehicule: Vehicule): Observable<any>{
    return this.http.get<Vehicule>(RECIPE_SERVER + '/findbytype/' + vehicule.type);
}

public getVehiculeByNombrePlaces(vehicule: Vehicule): Observable<any> {
    return this.http.get<Vehicule>(RECIPE_SERVER + '/findbyplace/' + vehicule.nombrePlaces);
}
public getVehiculeByMarque(vehicule: Vehicule): Observable<any> {
    return this.http.get<Vehicule>(RECIPE_SERVER + '/findbymarque/' + vehicule.marque);

}
}
