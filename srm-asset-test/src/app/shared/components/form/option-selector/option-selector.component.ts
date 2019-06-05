import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Option } from 'src/app/shared/models/option.model';

@Component({
  selector: 'app-option-selector',
  templateUrl: './option-selector.component.html',
  styleUrls: ['./option-selector.component.scss']
})
export class OptionSelector implements OnChanges {

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
