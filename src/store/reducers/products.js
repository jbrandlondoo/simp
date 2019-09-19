import * as actions from './../action/action';

const initialState = {
    products:[]
};

export const products = (state = initialState, action) =>{
    switch(action.type){
        case actions.ADD_PRODUCT_TO_SELL:
            return Object.assign({},state,{
                products:state.products.find(item => +item.id === +action.payload.id)?state.products:[
                    ...state.products,
                    action.payload
                ]
            })
        case actions.CHANGE_QUANTITY:
            return Object.assign({},state,{
                products:state.products.map(item=>{
                    if(+item.id === +action.payload.id)
                        item.quantity = action.payload.quantity 
                    return item
                })
            })
        case actions.CANCEL_SELL:
            return Object.assign({},state,{
                products:[]
            })
        case actions.SELECTED_PRODUCT:
                return Object.assign({},state,{
                    products:state.products.map(item=>{
                        if(+item.id === +action.payload.id)
                            item.selected = !item.selected 
                        return item
                    })
                })
        case actions.DEL_SELECTED_PRODUCT:
                return Object.assign({},state,{
                    products:state.products.filter(item=>!item.selected)
                })
        case actions.LOGOUT:
            return initialState
        default:
            return state
    }
}