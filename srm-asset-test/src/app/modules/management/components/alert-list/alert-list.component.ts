import { AlertListService } from './alert-list.service';
import { Component, OnInit } from '@angular/core';
import { Option } from 'src/app/shared/models/option.model';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.scss']
})
export class AlertListComponent implements OnInit {

  public actionItems: Array<Option>

  public getActionItems() {
    this.AlertListService.getActionList().subscribe(
      (response: Array<Option>) => {
        this.actionItems = response;
        console.log('action items: ', this.actionItems);
      }, error => {
        console.log('Throw error: ', error);
      }
    )
  }

  public selectActionOption(event) {
    console.log(event);
  }

  constructor(private AlertListService: AlertListService) { }

  ngOnInit() {
    this.getActionItems();
  }

}
