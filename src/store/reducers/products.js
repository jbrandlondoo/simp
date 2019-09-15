import * as actions from './../action/action';

const initialState = {
    products:[]
};

export const products = (state = initialState, action) =>{
    switch(action.type){
        case actions.ADD_PRODUCT_TO_SELL:
            return Object.assign({},state,{
                products:[
                    ...state.products,
                    action.payload
                ]
            })
        case actions.LOGOUT:
            return initialState
        default:
            return state
    }
}