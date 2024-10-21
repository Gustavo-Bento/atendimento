import { Component } from '@angular/core';
import { Turnos } from './turnos';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TurnosService } from './turnos.service';

@Component({
  selector: 'turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css'],
})
export class TurnosComponent {
  turnos: Turnos[] = [];
  formGroupTurnos: FormGroup;
  istEditing: boolean = false;

  ngOnInit(): void {
    this.loadTurnos();
  }

  loadTurnos() {
    this.service.getTurnos().subscribe({
      next: (data) => (this.turnos = data),
    });
  }
  constructor(
    private formBuilder: FormBuilder,
    private service: TurnosService
  ) {
    this.formGroupTurnos = this.formBuilder.group({
      id_turno: [''],
      hora_inicio: ['', [Validators.required]],
      hora_fim: ['', [Validators.required]],
      escala: ['', [Validators.required]],
      id_equipe: ['', [Validators.required]],
      id_Veiculo: ['', [Validators.required]],
    });
  }
  save() {
    if (this.formGroupTurnos.valid) {
      if (this.istEditing) {
        this.service.update(this.formGroupTurnos.value).subscribe({
          next: () => {
            this.loadTurnos(),
              (this.istEditing = false),
              this.formGroupTurnos.reset();
          },
        });
      } else {
        this.service.save(this.formGroupTurnos.value).subscribe({
          next: (data) => {
            this.turnos.push(data);
            this.formGroupTurnos.reset();
          },
        });
      }
    }
  }
  delete(ocorrencia: Turnos) {
    this.service.delete(ocorrencia).subscribe({
      next: () => this.loadTurnos(),
    });
  }
  edit(ocorrencia: Turnos) {
    this.formGroupTurnos.setValue(ocorrencia);
    this.istEditing = true;
  }

  get id_turno(): any {
    return this.formGroupTurnos.get('id_turno');
  }

  get hora_inicio(): any {
    return this.formGroupTurnos.get('hora_inicio');
  }

  get hora_fim(): any {
    return this.formGroupTurnos.get('hora_fim');
  }

  get escala(): any {
    return this.formGroupTurnos.get('escala');
  }

  get id_equipe(): any {
    return this.formGroupTurnos.get('id_equipe');
  }

  get id_veiculo(): any {
    return this.formGroupTurnos.get('id_veiculo');
  }
}
