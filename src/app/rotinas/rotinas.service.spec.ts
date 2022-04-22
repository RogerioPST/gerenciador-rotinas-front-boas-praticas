import { TestBed } from '@angular/core/testing';

import { RotinasService } from './rotinas.service';

describe('RotinasService', () => {
  let service: RotinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
