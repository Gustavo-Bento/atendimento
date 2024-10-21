export interface Ocorrencias {
  id_ocorrencia: Number;
  tipo_ocorrencia: String;
  estado_ocorrencia: ['Em Andamento', 'Em Aberto', 'Encerrada'];
  data_ocorrencia: Date;
}
