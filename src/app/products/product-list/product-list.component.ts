import { Component, OnInit, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Subscription } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';

import * as fromProducts from '../state/product.reducer'
import * as fromProductActions from '../state/product.actions'

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(private productService: ProductService,
    private store: Store<fromProducts.AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(fromProducts.getCurrentProduct)).subscribe(
      product => { if (product) this.selectedProduct = product }
    )



    this.store.pipe(select(fromProducts.getProducts)).subscribe(
      (products: Product[]) => this.products = products
    )

    // this.productService.getProducts().subscribe({
    //   next: (products: Product[]) => this.products = products,
    //   error: err => this.errorMessage = err
    // });

    this.store.pipe(select(fromProducts.getShowProductCode)).subscribe(
      showProductCode => {
        console.log(showProductCode)
        this.displayCode = showProductCode
      }
    )
  }

  ngOnDestroy(): void {

  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new fromProductActions.TogleProductCode(value))

  }

  newProduct(): void {
    this.store.dispatch(new fromProductActions.IntializeCurrentProduct())
  }

  productSelected(product: Product): void {
    //  this.productService.changeSelectedProduct(product);
    this.store.dispatch(new fromProductActions.SetCurrentProduct(product))
  }

}
