import { TestBed } from '@angular/core/testing';

import { RootHelpersAlertsLibraryService } from './root-helpers-alerts-library.service';

describe('RootHelpersAlertsLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RootHelpersAlertsLibraryService = TestBed.get(RootHelpersAlertsLibraryService);
    expect(service).toBeTruthy();
  });
});
