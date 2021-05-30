import { Product } from "../product";
import * as fromRoot from '../../state/app.state'
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromProductActions from './product.actions'

export interface AppState extends fromRoot.AppState {
    products: ProductState
}
export interface ProductState {
    showProductCode: boolean
    currentProduct: Product
    products: Product[]
}
const initialState: ProductState = {
    showProductCode: false,
    currentProduct: null,
    products: []
}

const getProductFeatureState = (state: AppState) => state.products

export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
)
export const getCurrentProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
)
export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
)


export function productsReducer(state = initialState, action: fromProductActions.ProductsActions): ProductState {
    switch (action.type) {
        case fromProductActions.ProductActionTypes.TogleProductCode:
            return {
                ...state,
                showProductCode: action.payload
            }
        case fromProductActions.ProductActionTypes.SetCurrentProduct:
            return {
                ...state,
                currentProduct: { ...action.payload }
            }
        case fromProductActions.ProductActionTypes.ClearCurrentPrdouct:
            return {
                ...state,
                currentProduct: null
            }
        case fromProductActions.ProductActionTypes.IntializeCurrentProduct:
            return {
                ...state,
                currentProduct: {
                    id: 0,
                    productName: '',
                    productCode: 'New',
                    description: '',
                    starRating: 0
                }
            }
        case fromProductActions.ProductActionTypes.LoadSuccess:
            return {
                ...state,
                products: [...action.payload]
            }
        default:
            return state
    }
}