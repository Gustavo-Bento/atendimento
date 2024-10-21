import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-router-module';

import { AppComponent } from './app.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { EquipesComponent } from './equipes/equipes.component';
import { TurnosComponent } from './turnos/turnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AtendimentoComponent,
    OcorrenciasComponent,
    VeiculosComponent,
    FuncionariosComponent,
    EquipesComponent,
    TurnosComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
