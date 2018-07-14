import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { ProductImage } from '../shared';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit, OnChanges {

  @Input()
  productId: string;

  productImages: ProductImage[] = [];
  srcImg: Observable<string> | null;
  titleImg: string;

  constructor(private productService: ProductService, private af: AngularFireStorage) { }

  ngOnChanges() {
    this.srcImg = null;
    this.titleImg ='';
    this.productService.getProductImages(this.productId).subscribe(productImages => {
      this.productImages = productImages;
      if (this.productImages[0]) {
        this.srcImg = this.af.ref(this.productImages[0].path).getDownloadURL();
        this.titleImg = this.productImages[0].title;
      }

    }
    )
  }

  ngOnInit() {

  }

}
