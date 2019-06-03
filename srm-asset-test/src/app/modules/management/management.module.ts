import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';
import { ManagementComponent } from './management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ManagementComponent,
    ShortcutsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortcutsComponent
  ]
})
export class ManagementModule { }
