import { Product } from "../product";
import * as fromRoot from '../../state/app.state'
import * as fromProductActions from './product.actions'
import { ProductState } from "./index";


const initialState: ProductState = {
    showProductCode: false,
    currentProductId: null,
    products: [],
    error: null
}

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
                currentProductId: action.payload.id
            }
        case fromProductActions.ProductActionTypes.ClearCurrentPrdouct:
            return {
                ...state,
                currentProductId: null
            }
        case fromProductActions.ProductActionTypes.IntializeCurrentProduct:
            return {
                ...state,
                currentProductId: 0
            }
        case fromProductActions.ProductActionTypes.LoadSuccess:
            return {
                ...state,
                products: [...action.payload],
                error: null
            }
        case fromProductActions.ProductActionTypes.LoadFail:
            return {
                ...state,
                products: [],
                error: action.payload
            }
        case fromProductActions.ProductActionTypes.UpdateSuccess:
            const itemIndex = state.products.findIndex(p => p.id === action.payload.id)
            const updatedProducts = [...state.products]
            updatedProducts[itemIndex] = { ...action.payload }
            // OR
            // const updatedProducts = state.products
            //     .map(item => item.id === action.payload.id ? action.payload : item)
            return {
                ...state,
                products: updatedProducts,
                currentProductId: action.payload.id,
                error: null
            }
        case fromProductActions.ProductActionTypes.Updatefailed:
            return {
                ...state,
                error: action.payload
            }
        case fromProductActions.ProductActionTypes.DeleteSuccess:
            const newProducts = state.products.filter(item => item.id != action.payload)
            return {
                ...state,
                products: newProducts,
                error: null,
                currentProductId: null
            }
        case fromProductActions.ProductActionTypes.DeleteFailed:
            return {
                ...state,
                error: action.payload
            }

        case fromProductActions.ProductActionTypes.AddSuccess:
            console.log([...state.products, action.payload])
            return {
                ...state,
                products: [...state.products, action.payload],
                error: null
            }

        default:
            return state
    }
}