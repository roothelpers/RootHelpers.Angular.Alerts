import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootHelpersAlertsLibraryComponent } from './root-helpers-alerts-library.component';

describe('RootHelpersAlertsLibraryComponent', () => {
  let component: RootHelpersAlertsLibraryComponent;
  let fixture: ComponentFixture<RootHelpersAlertsLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootHelpersAlertsLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootHelpersAlertsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
