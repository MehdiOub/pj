import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EvenementService} from "./evenement.service";
import {Evenement} from "../model/evenement.model";
import {Station} from "../model/station.model";

@Injectable({
  providedIn: 'root'
})
export class StationService {
  private url='/app/TraitementAlarmes/Station';
  private _station = new Station();
  private _stations = new Array<Station>();

  constructor(private http: HttpClient) { }
}
