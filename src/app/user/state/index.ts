import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../user";

export interface UserState {
    maskUserName: boolean,
    currentUser: User
}
const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
    getUserFeatureState,
    state => state.maskUserName
);