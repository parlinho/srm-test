import { ShortcutListComponent } from './components/shortcut-list/shortcut-list.component';
import { ManagementComponent } from './management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertListComponent } from './components/alert-list/alert-list.component';
import { ProductSelectorComponent } from './components/product-selector/product-selector.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ManagementComponent,
    ShortcutListComponent,
    AlertListComponent,
    ProductSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ShortcutListComponent,
    AlertListComponent,
    ProductSelectorComponent
  ]
})
export class ManagementModule { }
