import { SidebarMenuService } from './sidebar-menu/sidebar-menu.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    SearchBarComponent,
    SidebarMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    SearchBarComponent,
    SidebarMenuComponent
  ],
  providers: [
    SidebarMenuService
  ]
})
export class NavigationModule { }
