import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, switchMap, tap } from "rxjs/operators";
import { ProductService } from "../product.service";
import { Product } from '../product'

import * as fromProduct from './product.actions'
import { of } from "rxjs";


@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions,
        private productService: ProductService) { }


    LoadProducts$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromProduct.ProductActionTypes.Load),
            switchMap(() => this.productService.getProducts()
                .pipe(
                    map((products: Product[]) => new fromProduct.LoadSuccess(products)),
                    catchError(err => of(new fromProduct.LoadFail(err)))
                ))
        )
    )
    UpdateProducts$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromProduct.ProductActionTypes.updateProduct),
            exhaustMap((action: fromProduct.UpdateProduct) =>
                this.productService.updateProduct(action.payload)
                    .pipe(
                        map(product => new fromProduct.UpdateSuccess(product)),
                        catchError(err => of(new fromProduct.UpdateFail(err)))
                    )
            )
        )
    )
    deleteProducts$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromProduct.ProductActionTypes.DeleteProduct),
            switchMap((action: fromProduct.DeleteProduct) =>
                this.productService.deleteProduct(action.payload)
                    .pipe(
                        map(() => new fromProduct.DeleteSuccess(action.payload)),
                        catchError((err) => of(new fromProduct.DeleteFail(err)))
                    )
            )
        )
    )
    AddProducts$ = createEffect(
        () => this.actions$.pipe(
            ofType(fromProduct.ProductActionTypes.AddProduct),
            switchMap((action: fromProduct.AddProduct) =>
                this.productService.createProduct(action.payload)
                    .pipe(
                        map((product: Product) => new fromProduct.AddSuccess(product)),
                        catchError((err) => of(new fromProduct.DeleteFail(err)))
                    ))
        )
    )
}