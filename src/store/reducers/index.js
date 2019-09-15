import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { authentication } from './authentication'
import { products } from './products'

export default combineReducers({
    form:formReducer,
    authentication,
    products,
})