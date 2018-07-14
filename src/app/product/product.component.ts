import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product, ProductFormModel } from '../shared';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input()
  product: Product;

  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.product) {
      this.productForm.setValue({
        id: this.product.id,
        name: this.product.name,
        description: this.product.description
      });
    }
  }

  createForm() {
    this.productForm = this.fb.group(new ProductFormModel());
  }

  onSubmit(f) {
  }

}
