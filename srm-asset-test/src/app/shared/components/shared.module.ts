import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { SidebarMenuComponent } from './navigation/sidebar-menu/sidebar-menu.component';
import { SearchBarComponent } from './navigation/search-bar/search-bar.component';
import { NavigationModule } from './navigation/navigation.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavigationModule,
    HeaderModule
  ],
  exports: [
    SearchBarComponent,
    SidebarMenuComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
