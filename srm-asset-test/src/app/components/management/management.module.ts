import { PanelComponent } from './panel/panel.component';
import { ManagementComponent } from './management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ManagementComponent,
    PanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PanelComponent
  ]
})
export class ManagementModule { }
