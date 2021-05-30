import { Action } from "@ngrx/store";
import { Product } from "../product";


export enum ProductActionTypes {
    TogleProductCode = '[product] toggle products code',
    SetCurrentProduct = '[product] set current product',
    ClearCurrentPrdouct = '[product] clear current product',
    IntializeCurrentProduct = '[product] intialize current product',
    Load = '[product] load products',
    LoadSuccess = '[prdocut] load success',
    LoadFail = '[product] load fail'
}

export class TogleProductCode implements Action {
    readonly type = ProductActionTypes.TogleProductCode
    constructor(public payload: boolean) { }
}
export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct
    constructor(public payload: Product) { }
}
export class ClearCurrentPrdouct implements Action {
    readonly type = ProductActionTypes.ClearCurrentPrdouct

}
export class IntializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.IntializeCurrentProduct
}
export class Load implements Action {
    readonly type = ProductActionTypes.Load

}
export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess
    constructor(public payload: Product[]) { }
}
export class LoadFail implements Action {
    readonly type = ProductActionTypes.LoadFail
    constructor(public payload: string) { }
}

export type ProductsActions =
    TogleProductCode |
    SetCurrentProduct |
    ClearCurrentPrdouct |
    IntializeCurrentProduct |
    Load |
    LoadSuccess |
    LoadFail;