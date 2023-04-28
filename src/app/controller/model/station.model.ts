import {Voie} from "./voie.model";

export class Station {
  private id!: number;
  private libelle!: string ;
  private voies = new Array<Voie>()  ;

}
