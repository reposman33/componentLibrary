import { TestBed } from '@angular/core/testing';

import { ApiModulesService } from './api-modules.service';

describe('ApiModulesService', () => {
  let service: ApiModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
