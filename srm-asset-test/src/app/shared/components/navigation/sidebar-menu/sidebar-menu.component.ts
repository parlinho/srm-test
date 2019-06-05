import { MenuItem } from './../../../models/menu.model';
import { SidebarMenuService } from './sidebar-menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  public menuItems: Array<MenuItem>;

  public getMenuItems() {
    this.SidebarMenuService.getMenuItems().subscribe(
      (response: Array<any>) => {
        this.menuItems = response;
        console.log('menu items: ', this.menuItems);
      }, error => {
        console.log('Throw error: ', error);
      }
    )
  }

  constructor(private SidebarMenuService: SidebarMenuService) { }

  ngOnInit() {
    this.getMenuItems();
  }

}
