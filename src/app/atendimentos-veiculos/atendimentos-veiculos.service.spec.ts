import { TestBed } from '@angular/core/testing';

import { AtendimentosVeiculosService } from './atendimentos-veiculos.service';

describe('AtendimentosVeiculosService', () => {
  let service: AtendimentosVeiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtendimentosVeiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
