import { Vehicule } from './vehicule';
import { PrenormalizedTemplateMetadata } from '@angular/compiler';


export class Agence {
    ville: string;
    constructor(ville: string) {
        this.ville = ville;
    }

 }

export class Client {
 // tslint:disable-next-line:variable-name
 id_client: number;
 pseudo: string;
 nom: string;
 prenom: string;
 anneePermis: string;
 adresse: string;
 mail: string;
 telephone: number;


 //  tslint:disable-next-line:max-line-length
 constructor(id_client: number, pseudo: string, nom: string, prenom: string, anneePermis: string, adresse: string, mail: string, telephone: number){
     this.id_client = id_client;
     this.pseudo = pseudo;
     this.nom = nom;
     this.prenom = prenom;
     this. anneePermis = anneePermis;
     this.adresse = adresse;
     this.mail = mail;
     this.telephone = telephone;
 }
public static createBlank(): Client {
    // tslint:disable-next-line:max-line-length
    return new Client( 0,  'null',  'null', 'null',  'null',  'null',  'null', 0);
}
}


export class Reservation {
    // tslint:disable-next-line:variable-name
    public id_reservation: number;
   public dateResa: string; // date + h
   public dateDebut: string; // date + h
   public dateFin: string;    // date + h
   public agenceDebut: Agence;
   public agenceFin: Agence;
   // tslint:disable-next-line:max-line-length
//    public client: Client = {id_client: 0, pseudo: 'null', anneePermis: 'null', adresse: 'null', mail: 'null', telephone: 0, nom: 'null', prenom: 'null'};
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
// tslint:disable-next-line:max-line-length
this.client =  client;
this.vehicule = vehicule;
}

public static createBlank(): Reservation {
    return new Reservation(-1, '', '', '', null, null, null, null);
}

public static reservationFromJSON(obj: any): Reservation {
    return new Reservation(obj.id, obj.dateResa, obj.dateDebut, obj.dateFin, obj.agenceDebut, obj.agenceFin, obj.client, obj.vehicule);
}
}


