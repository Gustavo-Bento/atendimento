import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { EquipesComponent } from './equipes/equipes.component';
import { AtendimentoComponent } from './atendimento/atendimento.component' ;
import { VeiculosComponent } from './veiculos/veiculos.component';
import { AtendimentosVeiculosComponent } from './atendimentos-veiculos/atendimentos-veiculos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

const routes: Routes = [
  {path:'', component:AtendimentoComponent},
  {path:'equipes', component:EquipesComponent},
  {path:'ocorrencias',component: OcorrenciasComponent },
  {path:'funcionarios',component: FuncionariosComponent},
  {path:'veiculos',component: VeiculosComponent},
  {path:'atendimento-veiculos', component: AtendimentosVeiculosComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
