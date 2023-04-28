import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnomalieCreateComponent } from './view/Anomalie/anomalie-create/anomalie-create.component';
import { EquipementCreateComponent } from './view/Equipement/equipement-create/equipement-create.component';
import { EvenementCreateComponent } from './view/Evenement/evenement-create/evenement-create.component';
import { StationCreateComponent } from './view/Station/station-create/station-create.component';
import { VoixCreateComponent } from './view/Voix/voix-create/voix-create.component';

@NgModule({
  declarations: [
    AppComponent,
    AnomalieCreateComponent,
    EquipementCreateComponent,
    EvenementCreateComponent,
    StationCreateComponent,
    VoixCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
