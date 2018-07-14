import { Product } from '../models/product.model';


export class GetAddedProducts {
  static readonly type = '[PRODUCT] GetAddedProducts'
}

export class GetUpdatedProducts {
  static readonly type = '[PRODUCT] GetAddedProducts'
}

export class GetRemovedProducts{
  static readonly type = '[PRODUCT] GetRemovedProducts'
}

export class AddProduct {
  static readonly type = '[PRODUCT] Add'

  constructor(private payload: Product) {}
}

export class UpdateProduct {
  static readonly type = '[PRODUCT] Update'

  constructor(private payload: Product) {}
}


export class RemoveProduct {
  static readonly type = '[PRODUCT] Remove'

  constructor(private productId: string) {}
}

