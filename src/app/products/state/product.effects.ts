import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs/operators";
import { ProductService } from "../product.service";
import { Product } from '../product'

import * as fromProduct from './product.actions'

@Injectable({ providedIn: 'root' })
export class ProductEffects {
    constructor(private actions$: Actions,
        private productService: ProductService) { }


    LoadProducts$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromProduct.ProductActionTypes.Load),
            tap(() => console.log('dsdsds')),
            switchMap(() => this.productService.getProducts().pipe(
                map((products: Product[]) => {
                    console.log(products)
                    return new fromProduct.LoadSuccess(products)
                }
                )
            ))
        )
    )

}