import { OptionSelectorDoubleArrow } from './option-selector-double-arrow/option-selector-double-arrow.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionSelector } from './option-selector/option-selector.component';

@NgModule({
    declarations: [
        OptionSelector,
        OptionSelectorDoubleArrow
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        OptionSelector,
        OptionSelectorDoubleArrow
    ]
})
export class FormModule { }
