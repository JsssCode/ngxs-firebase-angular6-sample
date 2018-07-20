import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { ProductImage } from '../shared';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit, OnChanges {

  @Input()
  productId: string;

  productImages: ProductImage[] = [];
  srcImg: Array<Observable<string>> | null = [];
  titleImg: Array<string> = [];

  constructor(private productService: ProductService, private af: AngularFireStorage) { }

  ngOnChanges() {
    this.productService.getProductImages(this.productId).subscribe(productImages => {
      this.productImages = productImages;
      this.productImages.forEach(productImage => {
        this.srcImg.push(this.af.ref(productImage.path).getDownloadURL());
        this.titleImg.push(productImage.title);
      }
      )

    }
    )
  }

  ngOnInit() {

  }

}
