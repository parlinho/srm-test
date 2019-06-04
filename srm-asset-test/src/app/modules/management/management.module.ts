import { ShortcutListComponent } from './components/shortcut-list/shortcut-list.component';
import { ManagementComponent } from './management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertListComponent } from './components/alert-list/alert-list.component';

@NgModule({
  declarations: [
    ManagementComponent,
    ShortcutListComponent,
    AlertListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShortcutListComponent,
    AlertListComponent
  ]
})
export class ManagementModule { }
