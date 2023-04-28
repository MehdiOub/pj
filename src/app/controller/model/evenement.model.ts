import {Station} from "./station.model";
import {Anomalie} from "./anomalie.model";
import {Equipement} from "./equipement.model";
import {Voie} from "./voie.model";

export class Evenement {
  private id!: number ;
  private idStation!: number;
  private codeVoie!: string;
  private journeyDate!: Date;
  private typeVoie!: string;
  private messagetype!: string;
  private voieOperatonMode!: string;
  private telepeayage !: string;
  private eventType!: string;
  private numeroEqpt!: number;
  private codeEvenement!: string ;
  private eventDetails!: string ;
  private station!: Station;
  private anomalie!: Anomalie;
  private codeAnomalie!: string;
  private eqpt!: Equipement;
  private voie!: Voie;

}
