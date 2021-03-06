import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Product } from './product';
import { PRODUCTS_MOCK } from './products-mock';

@Injectable()
export class ProductService {

  constructor() { }
  
  getProducts(): Observable<Product[]> {
    return of<Product[]>(PRODUCTS_MOCK);
  }
  
  getProduct(id: number): Observable<Product> {
    let product: Product;
  
    product = PRODUCTS_MOCK
      .find(product => product.productId === id)
  
    return of<Product>(product);
  }  
}
