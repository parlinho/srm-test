import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EconomicGroup } from 'src/app/shared/models/economic-group.model';

@Component({
  selector: 'app-economic-group-selector',
  templateUrl: './economic-group-selector.component.html',
  styleUrls: ['./economic-group-selector.component.scss']
})
export class EconomicGroupSelectorComponent implements OnInit {

  public economicGroupForm: FormGroup;
  public isSubmitted = false;

  @Output() economicGroupSelectorEmitter = new EventEmitter();

  get description() { return this.economicGroupForm.get('description'); }

  onChange() {
    if (this.economicGroupForm.invalid) {
      return;
    }
    console.log(this.economicGroupForm.value);
    this.economicGroupSelectorEmitter.emit(new EconomicGroup(this.description.value));
  }

  constructor() { }

  ngOnInit() {
    this.economicGroupForm = new FormGroup({
      'description': new FormControl(null, Validators.required)
    });
  }

}
