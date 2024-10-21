import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipes } from './equipes';
import { Component } from '@angular/core';
import { EquipesService } from './equipes.service';

@Component({
  selector: 'equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.css'],
})
export class EquipesComponent {
  equipes: Equipes[] = [];
  formGroupEquipes: FormGroup;
  istEditing: boolean = false;

  ngOnInit(): void {
    this.loadEquipes();
  }

  loadEquipes() {
    this.service.getEquipes().subscribe({
      next: (data) => (this.equipes = data),
    });
  }
  constructor(
    private formBuilder: FormBuilder,
    private service: EquipesService
  ) {
    this.formGroupEquipes = this.formBuilder.group({
      id_equipe: ['', [Validators.required]],
      nome_equipe: ['', [Validators.required]],
    });
  }
  save() {
    if (this.formGroupEquipes.valid) {
      if (this.istEditing) {
        this.service.update(this.formGroupEquipes.value).subscribe({
          next: () => {
            this.loadEquipes(),
              (this.istEditing = false),
              this.formGroupEquipes.reset();
          },
        });
      } else {
        this.service.save(this.formGroupEquipes.value).subscribe({
          next: (data) => {
            this.equipes.push(data);
            this.formGroupEquipes.reset();
          },
        });
      }
    }
  }
  delete(equipe: Equipes) {
    this.service.delete(equipe).subscribe({
      next: () => this.loadEquipes(),
    });
  }
  edit(equipe: Equipes) {
    this.formGroupEquipes.setValue(equipe);
    this.istEditing = true;
  }

  get id_equipe(): any {
    return this.formGroupEquipes.get('id_equipe');
  }

  get nome_equipe(): any {
    return this.formGroupEquipes.get('nome_equipe');
  }
}
