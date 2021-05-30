import { Action } from "@ngrx/store";


export enum UserActionsType {
    maskUserName = '[user] mask userName'
}
export class toggleMaskUserName implements Action {
    type = UserActionsType.maskUserName

}
export type UserActions = toggleMaskUserName