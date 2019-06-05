import { Option } from './../../shared/models/option.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  public paths: Array<string> = ['Página Inicial', "Painel de Gestão"];

  public productList: Array<Option> = [
    new Option(0, 'Todos'),
    new Option(0, 'Produto 1'),
    new Option(0, 'Produto 2'),
  ]

  public selectProductOption(event){
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
