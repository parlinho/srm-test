import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Search } from 'src/app/shared/models/search.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {

  public searchForm: FormGroup;

  @Output() searchTermsEmitter = new EventEmitter();

  get searchTerms() { return this.searchForm.get('searchTerms'); }

  onSubmit() {
    if (this.searchForm.invalid) {
      return;
    }
    console.log(this.searchTerms.value);
    this.searchTermsEmitter.emit(new Search(this.searchTerms.value));
  }


  ngOnInit() {
    this.searchForm = new FormGroup({
      'searchTerms': new FormControl(null, Validators.required)
    });
  }

  constructor() { }

}
