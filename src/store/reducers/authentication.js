import * as actions from './../action/action';

const initialState = {};

export const authentication = (state = initialState, action) =>{
    switch(action.type){
        case actions.LOGIN:
            return action.payload
        case actions.LOGOUT:
            return initialState
        default:
            return state
    }
}