import { SidebarMenuComponent } from './navigation/sidebar-menu/sidebar-menu.component';
import { SearchBarComponent } from './navigation/search-bar/search-bar.component';
import { NavigationModule } from './navigation/navigation.module';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    SidebarMenuComponent
  ],
  imports: [
    CommonModule,
    NavigationModule
  ],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    SidebarMenuComponent
  ]
})
export class SharedModule { }
