export interface Veiculos{
  id_veiculo: Number;
  tipo_veiculo: String;
  capacidade: Number;
  tipo_ocorrencia_tratada: String;
  status:['Em andamento','livre']
}
