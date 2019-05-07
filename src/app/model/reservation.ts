import { Vehicule } from './vehicule';
import { PrenormalizedTemplateMetadata } from '@angular/compiler';
export interface Agence {
    'Lyon';
    'Brest';
    'Paris';
    'Marseille';
    'Strasbourg';
    'Montpellier';
    'Lille';
    'Bourges';
    'Clermont';
    'Tulle';
}

export interface Client {
 id_client: number;
 pseudo: string;
 nom: string;
 prenom: string;
 anneePermis: string;
 adresse: string;
 mail: string;
 telephone: number;
}

export class Reservation {
    // tslint:disable-next-line:variable-name
    public id_reservation: number;
   public dateResa: string; // date + h
   public dateDebut: string; // date + h
   public dateFin: string;    // date + h
   public agenceDebut: Agence;
   public agenceFin: Agence;
   public client: Client;
   public vehicule: Vehicule;

   // tslint:disable-next-line:variable-name
   constructor(id_reservation: number, dateResa: string, dateDebut: string, dateFin: string,
               agenceDebut: Agence, agenceFin: Agence, client: Client, vehicule: Vehicule) {
this.id_reservation = id_reservation;
this.dateResa = dateResa;
this.dateDebut = dateDebut;
this.dateFin = dateFin;
this.agenceDebut = agenceDebut;
this.agenceFin = agenceFin;
this.client = client;
this.vehicule = vehicule;
}

public static createBlank(): Reservation {
    return new Reservation(-1, '', '', '', null, null, null, null);
}

public static reservationFromJSON(obj: any): Reservation {
    return new Reservation(obj.id, obj.dateResa, obj.dateDebut, obj.dateFin, obj.agenceDebut, obj.agenceFin, obj.client, obj.vehicule);
}
}
