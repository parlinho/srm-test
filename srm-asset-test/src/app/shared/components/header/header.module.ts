import { FormModule } from './../form/form-module';
import { SharedModule } from './../shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAreaComponent } from './user-area/user-area.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UserAreaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule
  ],
  exports: [
    HeaderComponent,
    UserAreaComponent
  ]
})
export class HeaderModule { }
