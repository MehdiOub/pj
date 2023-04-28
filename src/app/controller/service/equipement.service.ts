import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Equipement} from "../model/equipement.model";

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  private url='/app/TraitementAlarmes/Equipement';
  private _equipement = new Equipement();
  private _equipements = new Array<Equipement>();

  constructor(private http: HttpClient) { }
}
