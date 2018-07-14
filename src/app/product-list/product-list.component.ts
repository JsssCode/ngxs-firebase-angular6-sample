import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ProductsDataSource } from './product-list-datasource';
import { Store } from '@ngxs/store';
import { AddProduct, RemoveProduct, Product } from '../shared'


@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProductsDataSource;

  selectedProduct: Product;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description', 'X'];

  constructor(private store: Store){}

  ngOnInit() {
    this.dataSource = new ProductsDataSource(this.paginator, this.sort);
  }

  removeProduct(productId: string){
    this.store.dispatch(new RemoveProduct(productId))
  }

  rowSelected(product: Product){
    this.selectedProduct = product;
  }
}
