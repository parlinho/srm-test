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
    CommonModule
  ],
  exports:[
    HeaderComponent,
    EconomicGroupSelectorComponent,
    UserAreaComponent
  ]
})
export class HeaderModule { }
