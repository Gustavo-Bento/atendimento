import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Veiculos } from './veiculos';
import { Component } from '@angular/core';
import { VeiculosService } from './veiculos.service';

@Component({
  selector: 'veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css'],
})
export class VeiculosComponent {
  veiculos: Veiculos[] = [];
  formGroupVeiculos: FormGroup;
  istEditing: boolean = false;

  ngOnInit(): void {
    this.loadVeiculos();
  }

  loadVeiculos() {
    this.service.getVeiculos().subscribe({
      next: (data) => (this.veiculos = data),
    });
  }
  constructor(
    private formBuilder: FormBuilder,
    private service: VeiculosService
  ) {
    this.formGroupVeiculos = this.formBuilder.group({
      id_atendimento: ['', [Validators.required]],
      id_ocorrencia: ['', [Validators.required]],
      id_equipe: ['', [Validators.required]]
    });
  }
  save() {
    if (this.formGroupVeiculos.valid) {
      if (this.istEditing) {
        this.service.update(this.formGroupVeiculos.value).subscribe({
          next: () => {
            this.loadVeiculos(),
              (this.istEditing = false),
            this.formGroupVeiculos.reset();
          },
        });
      } else {
        this.service.save(this.formGroupVeiculos.value).subscribe({
          next: (data) => {
            this.veiculos.push(data);
            this.formGroupVeiculos.reset();
          },
        });
      }
    }
  }
  delete(veiculo: Veiculos) {
    this.service.delete(veiculo).subscribe({
      next: () => this.loadVeiculos(),
    });
  }
  edit(veiculo: Veiculos) {
    this.formGroupVeiculos.setValue(veiculo);
    this.istEditing = true;
  }
  /**
   * id_veiculo: Number;
  tipo_veiculo: String;
  capacidade: Number;
  tipo_ocorrencia_tratada: String;
  status:['Em andamento','livre'];
  placa: String;
   */
  get id_veiculo(): any {
    return this.formGroupVeiculos.get('id_veiculo');
  }

  get tipo_veiculo(): any {
    return this.formGroupVeiculos.get('tipo_veiculo');
  }

  get capacidade(): any{
    return this.formGroupVeiculos.get('capacidade');
  }

  get tipo_ocorrencia_tratada(): any{
    return this.formGroupVeiculos.get('tipo_ocorrencia_tratada');
  }

  get status(): any{
    return this.formGroupVeiculos.get('status');
  }

  get placa(): any{
    return this.formGroupVeiculos.get('placa');
  }
}
