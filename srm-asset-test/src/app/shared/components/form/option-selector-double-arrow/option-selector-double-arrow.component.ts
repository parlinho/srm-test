import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Option } from 'src/app/shared/models/option.model';

@Component({
  selector: 'app-option-selector-double-arrow',
  templateUrl: './option-selector-double-arrow.component.html',
  styleUrls: ['./option-selector-double-arrow.component.scss']
})

export class OptionSelectorDoubleArrow implements OnChanges {

  public selected: Option;

  @Input() optionList: Array<Option>;
  @Output() selectedEmitter = new EventEmitter();

  onChange() {
    console.log(this.selected);
    this.selectedEmitter.emit(this.selected);
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.optionList.currentValue) {
      this.selected = this.optionList[0];
    }
  }
}
