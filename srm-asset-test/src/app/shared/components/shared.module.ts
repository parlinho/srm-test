import { FormModule } from './form/form-module';
import { OptionSelector } from '../components/form/option-selector/option-selector.component';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { SidebarMenuComponent } from './navigation/sidebar-menu/sidebar-menu.component';
import { SearchBarComponent } from './navigation/search-bar/search-bar.component';
import { NavigationModule } from './navigation/navigation.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';

@NgModule({
  declarations: [BreadCrumbComponent],
  imports: [
    CommonModule,
    NavigationModule,
    HeaderModule,
    FormModule
  ],
  exports: [
    SearchBarComponent,
    SidebarMenuComponent,
    HeaderComponent,
    OptionSelector,
    BreadCrumbComponent
  ]
})
export class SharedModule { }
