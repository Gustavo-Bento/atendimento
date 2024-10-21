import { Component } from '@angular/core';
import { Ocorrencias } from './ocorrencias';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OcorrenciasService } from './ocorrencias.service';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.component.html',
  styleUrls: ['./ocorrencias.component.css']
})
export class OcorrenciasComponent {
  ocorrencias: Ocorrencias[] = [];
  formGroupOcorrencias: FormGroup;
  istEditing: boolean = false;

  ngOnInit(): void {
    this.loadOcorrencias();
  }

  loadOcorrencias() {
    this.service.getOcorrencias().subscribe({
      next: (data) => (this.ocorrencias = data),
    });
  }
  constructor(
    private formBuilder: FormBuilder,
    private service: OcorrenciasService
  ) {
    this.formGroupOcorrencias = this.formBuilder.group({
      id_ocorrencia: ['', [Validators.required]],
      tipo_ocorrencia: ['', [Validators.required]],
      estado_ocorrencia: [''],
      data_ocorrencia: ['']
    });
  }
  save() {
    if (this.formGroupOcorrencias.valid) {
      if (this.istEditing) {
        this.service.update(this.formGroupOcorrencias.value).subscribe({
          next: () => {
            this.loadOcorrencias(),
              (this.istEditing = false),
            this.formGroupOcorrencias.reset();
          },
        });
      } else {
        this.service.save(this.formGroupOcorrencias.value).subscribe({
          next: (data) => {
            this.ocorrencias.push(data);
            this.formGroupOcorrencias.reset();
          },
        });
      }
    }
  }
  delete(ocorrencia: Ocorrencias) {
    this.service.delete(ocorrencia).subscribe({
      next: () => this.loadOcorrencias(),
    });
  }
  edit(ocorrencia: Ocorrencias) {
    this.formGroupOcorrencias.setValue(ocorrencia);
    this.istEditing = true;
  }

  get id_ocorrencia(): any {
    return this.formGroupOcorrencias.get('id_ocorrencia');
  }

  get tipo_ocorrencia(): any {
    return this.formGroupOcorrencias.get('tipo_ocorrencia');
  }

  get estado_ocorrencia(): any{
    return this.formGroupOcorrencias.get('estado_ocorrencia');
  }
  get data_ocorrencia(): any{
    return this.formGroupOcorrencias.get('data_ocorrencia');
  }

}
