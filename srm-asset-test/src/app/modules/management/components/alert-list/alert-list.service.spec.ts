import { TestBed } from '@angular/core/testing';

import { AlertListService } from './alert-list.service';

describe('AlertListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertListService = TestBed.get(AlertListService);
    expect(service).toBeTruthy();
  });
});
