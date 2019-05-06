export class Vehicule {
    public id_vehicule: number;
    public type: string;
    public marque: string;
    public nombrePlaces: number;
    public consommation: number;
    public emplacement: string;
    public disponibilite: boolean;
    public etatLieu: string;
    public prix: number;

    constructor( id_vehicule: number, type: string, marque: string, nombrePlaces: number, consommation: number,
                 emplacement: string, disponibilite: boolean, etatLieu: string, prix: number)  {
                    this.id_vehicule = id_vehicule;
                    this.type = type;
                    this.marque = marque;
                    this.nombrePlaces = nombrePlaces;
                    this.consommation = consommation;
                    this.emplacement = emplacement;
                    this.disponibilite = disponibilite;
                    this.etatLieu = etatLieu;
                    this.prix = prix;

                }



public static createBlank(): Vehicule {
    return new Vehicule (-1, '', '', -1, -1, '', true, '', -1);
}

public static vehiculeFromJSON(obj: any): Vehicule {
    return new Vehicule(obj.id_vehicule, obj.type, obj.marque, obj.nombrePlaces, obj.comsommation,
         obj.emplacement, obj.disponibilite, obj.etatLieu, obj.prix);
}
}
