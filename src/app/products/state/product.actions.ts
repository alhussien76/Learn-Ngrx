import { Action } from "@ngrx/store";
import { Product } from "../product";


export enum ProductActionTypes {
    TogleProductCode = '[product] toggle products code',
    SetCurrentProduct = '[product] set current product',
    ClearCurrentPrdouct = '[product] clear current product',
    IntializeCurrentProduct = '[product] intialize current product',
    Load = '[product] load products',
    LoadSuccess = '[prdocut] load success',
    LoadFail = '[product] load fail',
    updateProduct = '[product] update product',
    UpdateSuccess = '[product] update success',
    Updatefailed = '[product] update failed',
    DeleteProduct = '[product] delete product',
    DeleteSuccess = '[product] delete success',
    DeleteFailed = '[product] delete failed',
    AddProduct = '[product] add product',
    AddSuccess = '[product] add success'

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
export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.updateProduct
    constructor(public payload: Product) { }
}
export class UpdateSuccess implements Action {
    readonly type = ProductActionTypes.UpdateSuccess
    constructor(public payload: Product) { }
}
export class UpdateFail implements Action {
    readonly type = ProductActionTypes.Updatefailed
    constructor(public payload: string) { }
}
export class DeleteProduct implements Action {
    readonly type = ProductActionTypes.DeleteProduct
    constructor(public payload: number) { }
}
export class DeleteSuccess implements Action {
    readonly type = ProductActionTypes.DeleteSuccess
    constructor(public payload: number) { }
}
export class DeleteFail implements Action {
    readonly type = ProductActionTypes.DeleteFailed
    constructor(public payload: string) { }
}
export class AddProduct implements Action {
    readonly type = ProductActionTypes.AddProduct
    constructor(public payload: Product) { }
}
export class AddSuccess implements Action {
    readonly type = ProductActionTypes.AddSuccess
    constructor(public payload: Product) { }
}

export type ProductsActions = TogleProductCode
    | SetCurrentProduct
    | ClearCurrentPrdouct
    | IntializeCurrentProduct
    | Load | LoadSuccess | LoadFail
    | UpdateProduct | UpdateSuccess | UpdateFail
    | DeleteProduct | DeleteSuccess | DeleteFail
    | AddProduct | AddSuccess