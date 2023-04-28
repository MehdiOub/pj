import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Anomalie} from "../model/anomalie.model";

@Injectable({
  providedIn: 'root'
})
export class AnomalieService {
  private url ='/app/TraitementAlarmes/Anomalie';
  private _anomalie = new Anomalie();
  private _anomalies = new Array<Anomalie>();
  constructor(private http: HttpClient) {

  }
}
