import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Station} from "../model/station.model";
import {Voie} from "../model/voie.model";

@Injectable({
  providedIn: 'root'
})
export class VoieService {
  private url='/app/TraitementAlarmes/Voie';
  private _voix = new Voie();
  private _voixs = new Array<Voie>();

  constructor(private http: HttpClient) { }

}
