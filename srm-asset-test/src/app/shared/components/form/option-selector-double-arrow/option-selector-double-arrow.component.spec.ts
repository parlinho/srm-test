import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSelectorDoubleArrowComponent } from './option-selector-double-arrow.component';

describe('OptionSelectorDoubleArrowComponent', () => {
  let component: OptionSelectorDoubleArrowComponent;
  let fixture: ComponentFixture<OptionSelectorDoubleArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionSelectorDoubleArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionSelectorDoubleArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
