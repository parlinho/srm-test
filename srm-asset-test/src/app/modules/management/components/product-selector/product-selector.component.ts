import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-product-selector',
  templateUrl: './product-selector.component.html',
  styleUrls: ['./product-selector.component.scss']
})
export class ProductSelectorComponent implements OnInit {

  public productSelectorForm: FormGroup;
  public isSubmitted = false;

  @Output() economicGroupSelectorEmitter = new EventEmitter();

  get product() { return this.productSelectorForm.get('product'); }

  onChange() {
    if (this.productSelectorForm.invalid) {
      return;
    }
    console.log(this.productSelectorForm.value);
    this.economicGroupSelectorEmitter.emit(new Product(this.product.value));
  }

  constructor() { }

  ngOnInit() {
    this.productSelectorForm = new FormGroup({
      'product': new FormControl(null, Validators.required)
    });
  }

}
