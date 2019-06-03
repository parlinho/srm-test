import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserArea } from 'src/app/shared/models/user-area.model';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.scss']
})
export class UserAreaComponent implements OnInit {
  public userAreaForm: FormGroup;
  public isSubmitted = false;

  @Output() economicGroupSelectorEmitter = new EventEmitter();

  get userName() { return this.userAreaForm.get('userName'); }

  onChange() {
    if (this.userAreaForm.invalid) {
      return;
    }
    console.log(this.userAreaForm.value);
    this.economicGroupSelectorEmitter.emit(new UserArea(this.userName.value));
  }

  constructor() { }

  ngOnInit() {
    this.userAreaForm = new FormGroup({
      'userName': new FormControl(null, Validators.required)
    });
  }

}
