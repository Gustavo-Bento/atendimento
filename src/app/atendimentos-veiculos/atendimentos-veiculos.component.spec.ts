import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentosVeiculosComponent } from './atendimentos-veiculos.component';

describe('AtendimentosVeiculosComponent', () => {
  let component: AtendimentosVeiculosComponent;
  let fixture: ComponentFixture<AtendimentosVeiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtendimentosVeiculosComponent]
    });
    fixture = TestBed.createComponent(AtendimentosVeiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
