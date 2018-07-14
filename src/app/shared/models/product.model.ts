
export abstract class ProductModel{

  id?: string;
  name: string;
  description: string;

  constructor(){
    this.id = '';
    this.name = '';
    this.description = ''
  }


}

export interface Product extends ProductModel {

}

export class ProductFormModel extends ProductModel{

  constructor(){
    super()
  }

}

export interface ProductImage{
  title: string;
  path: string;
  link: string;//for downloading
} 

export interface ProductRemain{
  quantity: number;
  totalsum: number;
  date: Date;
}