

export class Reservation {
    public id_reservation: number;
   public dateResa: string; // date + h
   public dateDebut: string; // date + h
   public dateFin: string;    // date + h
   public agenceDebut: string;
   public agenceFin: string;

   constructor(id_reservation: number, dateResa: string, dateDebut: string, dateFin: string,
               agenceDebut: string, agenceFin: string ) {
this.id_reservation = id_reservation;
this.dateResa = dateResa;
this.dateDebut = dateDebut;
this.dateFin = dateFin;
this.agenceDebut = agenceDebut;
this.agenceFin = agenceFin;

}

public static createBlank(): Reservation {
    return new Reservation(-1, '', '', '', '', '');
}

public static reservtionFromJSON(obj: any): Reservation {
    return new Reservation(obj.id, obj.dateResa, obj.dateDebut, obj.dateFin, obj.agenceDebut, obj.agenceFin);
}
}
