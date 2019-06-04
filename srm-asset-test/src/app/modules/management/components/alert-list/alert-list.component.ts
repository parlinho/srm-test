import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {

  public actionSelect : FormGroup;

  constructor() { }

  ngOnInit() {
    this.actionSelect = new FormGroup({
      'product': new FormControl(null, Validators.required)
    });
  }

}
