import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Atendimento } from './atendimento';
import { Component } from '@angular/core';
import { AtendimentoService } from './atendimento.service';

@Component({
  selector: 'atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.css'],
})
export class AtendimentoComponent {
  atendimento: Atendimento[] = [];
  formGroupAtendimento: FormGroup;
  istEditing: boolean = false;

  ngOnInit(): void {
    this.loadAtendimento();
  }

  loadAtendimento() {
    this.service.getAtendimento().subscribe({
      next: (data) => (this.atendimento = data),
    });
  }
  constructor(
    private formBuilder: FormBuilder,
    private service: AtendimentoService
  ) {
    this.formGroupAtendimento = this.formBuilder.group({
      id_atendimento: ['', [Validators.required]],
      id_ocorrencia: ['', [Validators.required]],
      id_equipe: ['', [Validators.required]]
    });
  }
  save() {
    if (this.formGroupAtendimento.valid) {
      if (this.istEditing) {
        this.service.update(this.formGroupAtendimento.value).subscribe({
          next: () => {
            this.loadAtendimento(),
              (this.istEditing = false),
            this.formGroupAtendimento.reset();
          },
        });
      } else {
        this.service.save(this.formGroupAtendimento.value).subscribe({
          next: (data) => {
            this.atendimento.push(data);
            this.formGroupAtendimento.reset();
          },
        });
      }
    }
  }
  delete(atendimento: Atendimento) {
    this.service.delete(atendimento).subscribe({
      next: () => this.loadAtendimento(),
    });
  }
  edit(atendimento: Atendimento) {
    this.formGroupAtendimento.setValue(atendimento);
    this.istEditing = true;
  }

  get id_atendimento(): any {
    return this.formGroupAtendimento.get('id_atendimento');
  }

  get id_ocorrencia(): any {
    return this.formGroupAtendimento.get('id_ocorrencia');
  }

  get id_equipe(): any{
    return this.formGroupAtendimento.get('id_equipe');
  }
}
