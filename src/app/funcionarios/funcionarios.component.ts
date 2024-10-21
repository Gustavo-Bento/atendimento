import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Funcionarios } from './funcionarios';
import { Component } from '@angular/core';
import { FuncionariosService } from './funcionarios.service';

@Component({
  selector: 'funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css'],
})
export class FuncionariosComponent {
  funcionarios: Funcionarios[] = [];
  formGroupFuncionarios: FormGroup;
  istEditing: boolean = false;

  ngOnInit(): void {
    this.loadFuncionarios();
  }

  loadFuncionarios() {
    this.service.getFuniconarios().subscribe({
      next: (data) => (this.funcionarios = data),
    });
  }
  constructor(
    private formBuilder: FormBuilder,
    private service: FuncionariosService
  ) {
    this.formGroupFuncionarios = this.formBuilder.group({
      id_funcionario: [''],
      nome: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
    });
  }
  save() {
    if (this.formGroupFuncionarios.valid) {
      if (this.istEditing) {
        this.service.update(this.formGroupFuncionarios.value).subscribe({
          next: () => {
            this.loadFuncionarios(),
              (this.istEditing = false),
              this.formGroupFuncionarios.reset();
          },
        });
      } else {
        this.service.save(this.formGroupFuncionarios.value).subscribe({
          next: (data) => {
            this.funcionarios.push(data);
            this.formGroupFuncionarios.reset();
          },
        });
      }
    }
  }
  delete(funcionario: Funcionarios) {
    this.service.delete(funcionario).subscribe({
      next: () => this.loadFuncionarios(),
    });
  }
  edit(funcionario: Funcionarios) {
    this.formGroupFuncionarios.setValue(funcionario);
    this.istEditing = true;
  }

  get id_funcionario(): any {
    return this.formGroupFuncionarios.get('id_funcionario');
  }

  get nome(): any {
    return this.formGroupFuncionarios.get('nome');
  }

  get cargo(): any {
    return this.formGroupFuncionarios.get('cargo');
  }
}
