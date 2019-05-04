import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const RESERVATION_SERVER = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
export class ResaServiceService {

  constructor(private http: HttpClient) {  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

public createResa(reservation: Reservation): Observable<any> {
  return this.http.post<Reservation>(RESERVATION_SERVER + '/reservation/addreservation',
  JSON.stringify(reservation), this.httpOptions);
}

}
