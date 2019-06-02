import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicGroupSelectorComponent } from './economic-group-selector.component';

describe('EconomicGroupSelectorComponent', () => {
  let component: EconomicGroupSelectorComponent;
  let fixture: ComponentFixture<EconomicGroupSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicGroupSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicGroupSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
