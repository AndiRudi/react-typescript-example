import { ApplicationActionTypes } from '../constants/ApplicationActionTypes';

export interface ISignOut {
    type: ApplicationActionTypes.SIGNOUT;
}
export interface IAuthenticate{
    type: ApplicationActionTypes.AUTHENTICATE;
    username: string;
    pw: string;
}

//Below we define the functions

export function signOut(): ISignOut { 
    return {
        type: ApplicationActionTypes.SIGNOUT
    }
};

export function authenticate(u: string, pw: string): IAuthenticate {
    return {
        type: ApplicationActionTypes.AUTHENTICATE,
        username: u,
        pw: pw
    }
};

//Put all actions in one type
export type ApplicationActions = ISignOut | IAuthenticate;