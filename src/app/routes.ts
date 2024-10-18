import { Routes } from '@angular/router';
import { OcorrenciasComponent } from './ocorrencias/ocorrencias.component';
import { AtendimentoComponent } from './atendimento/atendimento.component';

const routeConfig: Routes = [
  {
    path: '',
    component: OcorrenciasComponent,
    title: 'Pagina Inicial',
  },
  {
    path: 'details/:id',
    component: AtendimentoComponent,
    title: 'Atendimentos',
  },
];
export default routeConfig;
