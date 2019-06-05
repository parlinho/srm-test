import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionSelector } from './option-selector.component';

describe('ProductSelectorComponent', () => {
  let component: OptionSelector;
  let fixture: ComponentFixture<OptionSelector>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionSelector ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
