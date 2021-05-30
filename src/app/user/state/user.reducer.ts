import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../user";

import * as fromUserActoins from './user.actions'

export interface UserState {
    maskUserName: boolean,
    currentUser: User
}
const initialState: UserState = {
    maskUserName: false,
    currentUser: null
}
const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);
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