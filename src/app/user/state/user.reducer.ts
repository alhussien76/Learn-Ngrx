
import { UserState } from ".";
import * as fromUserActoins from './user.actions'

const initialState: UserState = {
    maskUserName: false,
    currentUser: null
}
export function userReducer(state = initialState, action: fromUserActoins.UserActions) {
    switch (action.type) {
        case fromUserActoins.UserActionsType.maskUserName:
            return {
                ...state,
                maskUserName: !state.maskUserName
            }
        default:
            return state
    }
}