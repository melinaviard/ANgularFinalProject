import { toBase64String } from '@angular/compiler/src/output/source_map';

export interface VehiculesDispo {
    Vehicules: Vehicule[];
}

export class Vehicule {
    // tslint:disable-next-line:variable-name
    public id_vehicule: number;
    public type: string;
    public marque: string;
    public nombrePlaces: number;
    public consommation: number;
    public emplacement: string;
    public disponibilite: string;
    public etatLieu: string;
    public photo: string;

    // tslint:disable-next-line:variable-name
    constructor(id_vehicule: number, type: string, marque: string, nombrePlaces: number,
                consommation: number, emplacement: string, disponibilite: string,
                etatLieu: string, photo: string) {
                this.id_vehicule = id_vehicule;
                this.type = type;
                this.marque = marque;
                this.nombrePlaces = nombrePlaces;
                this.consommation = consommation;
                this.emplacement = emplacement;
                this.disponibilite = disponibilite;
                this.etatLieu = etatLieu;
                this.photo = photo;
                } // fin constructor

    public static createBlank(): Vehicule {
        return new Vehicule(-1, '', '', 0, 0, '', '', '', '');
                }

    public static vehiculeFromJSON(obj: any): Vehicule {
        return new Vehicule(obj.id_vehicule, obj.type, obj.marque, obj.nombrePlaces,
                            obj.consommation, obj.emplacement, obj.disponibilite, obj.etatLieu, obj.photo);
                }

} // Fin classe
