import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Equipement} from "../model/equipement.model";
import {Evenement} from "../model/evenement.model";

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private url='/app/TraitementAlarmes/Evenement';
  private _evenement = new Evenement();
  private _evenements = new Array<Evenement>();

  constructor(private http: HttpClient) { }
}
