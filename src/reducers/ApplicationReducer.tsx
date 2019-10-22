import { ApplicationActions } from '../actions/ApplicationActions';
import { IApplicationState } from '../types';
import { ApplicationActionTypes } from '../constants/ApplicationActionTypes';

const initialStore : IApplicationState = {
  auth : {
    username: '',
    authenticated: false
  },
  challenges: null,
  language: 'de',
  pledges: null, 
  country: 'de'
};


export default function ApplicationReducer(state = initialStore, action: ApplicationActions): IApplicationState {
  
  switch (action.type) {
    case ApplicationActionTypes.SIGNOUT:
      return { ...state, auth: { authenticated: false }};
      
    case ApplicationActionTypes.AUTHENTICATE:
      console.log("Reducer called");
      return { 
         ...state, 
         auth: {
            username: action.username, 
            authenticated: true 
          }
      };

    default:
      return state;
  }
}