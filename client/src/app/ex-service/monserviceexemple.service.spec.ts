import { TestBed } from '@angular/core/testing';

import { MonserviceexempleService } from './monserviceexemple.service';

describe('MonserviceexempleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonserviceexempleService = TestBed.get(MonserviceexempleService);
    expect(service).toBeTruthy();
  });
});
