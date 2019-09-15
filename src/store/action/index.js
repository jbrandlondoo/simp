import * as actions from './action';

/**
 * @description se encarga de guardar el login en store
 * @param {Object} payload:{
 *  token:'',
 *  error:'',
 *  userId:'',
 *  name:'',
 *  storeName:''
 * }
 * @returns {Object} action
 */
export const login = payload => ({type:actions.LOGIN,payload});

/**
 * @description se encarga de guardar los productos en store
 * @param {Object} payload:{product,price,lot,code}
 * @returns {Object} action
 */
export const addProductToSell = payload => ({type:actions.ADD_PRODUCT_TO_SELL,payload});