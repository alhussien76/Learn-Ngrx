import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../product';

import * as fromProducts from '../../state'
import * as fromProductActions from '../../state/product.actions'


@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {

  displayCode$: Observable<boolean>;
  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;
  selectedProduct$: Observable<Product>;


  constructor(private store: Store<fromProducts.AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new fromProductActions.Load())

    // selectors 
    this.errorMessage$ = this.store.pipe(select(fromProducts.getError))
    this.selectedProduct$ = this.store.pipe(select(fromProducts.getCurrentProduct))
    this.products$ = this.store.pipe(select(fromProducts.getProducts))
    this.displayCode$ = this.store.pipe(select(fromProducts.getShowProductCode))

  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new fromProductActions.TogleProductCode(value))

  }

  newProduct(): void {
    this.store.dispatch(new fromProductActions.IntializeCurrentProduct())
  }

  productSelected(product: Product): void {
    this.store.dispatch(new fromProductActions.SetCurrentProduct(product))
  }
  deleteProduct(product: Product): void {
    if (product && product.id) {
      if (confirm(`Really delete the product: ${product.productName}?`)) {
        this.store.dispatch(new fromProductActions.DeleteProduct(product.id))
      }
    } else {
      // No need to delete, it was never saved
      this.store.dispatch(new fromProductActions.ClearCurrentPrdouct())
    }
  }
  saveProduct(product: Product,): void {
    if (product.id === 0) {
      this.store.dispatch(new fromProductActions.AddProduct(product))
    } else {
      this.store.dispatch(new fromProductActions.UpdateProduct(product))
    }
  }
  clearCurrentProduct() {
    this.store.dispatch(new fromProductActions.ClearCurrentPrdouct())
  }

}
