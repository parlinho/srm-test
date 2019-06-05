import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public aggregatedViews: Array<any> = [{ id: 0, description: 'Visão Agregada 1' }, { id: 1, description: 'Visão Agregada 2' }, { id: 2, description: 'Visão Agregada 3' }]

  public selectAggregatedViewsOption(event) {
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
