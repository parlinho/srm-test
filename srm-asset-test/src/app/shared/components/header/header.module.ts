import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EconomicGroupSelectorComponent } from './economic-group-selector/economic-group-selector.component';
import { UserAreaComponent } from './user-area/user-area.component';

@NgModule({
  declarations: [
    HeaderComponent,
    EconomicGroupSelectorComponent,
    UserAreaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    EconomicGroupSelectorComponent,
    UserAreaComponent
  ]
})
export class HeaderModule { }
