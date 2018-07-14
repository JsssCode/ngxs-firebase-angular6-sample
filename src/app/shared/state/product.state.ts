import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Product } from '../models/product.model';
import { AddProduct, RemoveProduct, GetAddedProducts, GetUpdatedProducts, GetRemovedProducts } from '../actions/product.actions';
import { ProductService } from '../services/product.service';


export class ProductStateModel {
  products: Product[]
}

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: []
  }
})

export class ProductState {

  constructor(private productService: ProductService) { }

  @Selector() static getProducts(state: ProductStateModel) {
    return state.products
  }

  @Action(AddProduct)
  add({ getState, patchState }: StateContext<ProductStateModel>, { payload }: AddProduct) {
    const state = getState();
    this.productService.addProduct(payload.name, payload.description).then(
      () => console.log("allIsOk"),
      err => { throw new Error(err) }
    )
  }

  @Action(RemoveProduct)
  remove({ getState, patchState }: StateContext<ProductStateModel>, { productId }: RemoveProduct) {
    const state = getState();
    this.productService.removeProduct(productId).then(
      () => console.log("allIsOk"),
      err => { throw new Error(err) }
    )
  }

  @Action(GetAddedProducts)
  addedProducts({ getState, patchState }: StateContext<ProductStateModel>) {
    this.productService.getAddedProducts().subscribe(productList => {
      const state = getState();
      patchState({
        products: [...state.products, ...productList]
      });
    }
    )
  }

  @Action(GetUpdatedProducts)
  updatedProducts({ getState, patchState }: StateContext<ProductStateModel>) {
    this.productService.getUpdatedProducts().subscribe(productList => { 
      productList.forEach(updatedProduct => {
        patchState({
          products: getState().products.map(product => { if (product.id === updatedProduct.id) {return updatedProduct} else return product })
        });
      })
    }
    )
  }

  @Action(GetRemovedProducts)
  removedProducts({ getState, patchState }: StateContext<ProductStateModel>) {
    this.productService.getRemovedProducts().subscribe(productIDs => {
      productIDs.forEach(productID => {
        patchState({
          products: getState().products.filter(product => product.id != productID)
        })
      });
    }
    )
  }


}