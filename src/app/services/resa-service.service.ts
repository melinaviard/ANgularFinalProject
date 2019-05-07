import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


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

// tslint:disable-next-line:variable-name
public findById(id_reservation: number): Observable<any> {
return this.http.get<Reservation>(RESERVATION_SERVER + '/reservation/' + id_reservation);
}

public updateReservation(reservation: Reservation): Observable<any> {
  return this.http.put<Reservation>(RESERVATION_SERVER + '/reservation/' + reservation.id_reservation,
  JSON.stringify(reservation), this.httpOptions);
}

public deleteReservation(reservation: Reservation): Observable<any> {
  return this.http.delete<Reservation>(RESERVATION_SERVER + '/reservation/' + reservation.id_reservation,
  this.httpOptions);
}

}

