import { FormModule } from './../../shared/components/form/form-module';
import { SharedModule } from './../../shared/components/shared.module';
import { AlertListService } from './components/alert-list/alert-list.service';
import { ShortcutListComponent } from './components/shortcut-list/shortcut-list.component';
import { ManagementComponent } from './management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertListComponent } from './components/alert-list/alert-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManagementComponent,
    ShortcutListComponent,
    AlertListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    FormModule
  ],
  exports: [
    ShortcutListComponent,
    AlertListComponent
  ],
  providers: [
    AlertListService
  ]
})
export class ManagementModule { }
