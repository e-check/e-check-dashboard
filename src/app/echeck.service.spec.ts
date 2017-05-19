import { TestBed, inject } from '@angular/core/testing';

import { EcheckService } from './echeck.service';

describe('EcheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcheckService]
    });
  });

  it('should be created', inject([EcheckService], (service: EcheckService) => {
    expect(service).toBeTruthy();
  }));
});
