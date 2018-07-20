import { Component, Input, OnChanges } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Observable } from 'rxjs';
import { ProductRemain } from '../shared'; 

@Component({
  selector: 'app-product-remain',
  templateUrl: './product-remain.component.html',
  styleUrls: ['./product-remain.component.scss']
})
export class ProductRemainComponent implements OnChanges {
  
  @Input()
  productId: string;

  @Input()
  productName: string;

  productRemain: ProductRemain;

  constructor(private productService: ProductService) { 
  }

  ngOnChanges(){
    this.productService.getProductRemain(this.productId).subscribe(productRemains=>
      this.productRemain = productRemains[0]
    )
  }



}
