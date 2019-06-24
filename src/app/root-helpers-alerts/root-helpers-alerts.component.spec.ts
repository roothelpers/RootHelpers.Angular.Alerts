import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootHelpersAlertsComponent } from './root-helpers-alerts.component';

describe('RootHelpersAlertsComponent', () => {
  let component: RootHelpersAlertsComponent;
  let fixture: ComponentFixture<RootHelpersAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootHelpersAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootHelpersAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
