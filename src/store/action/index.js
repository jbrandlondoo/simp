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

/**
 * @description se encarga de cambiar la cantidad a comprar del producto
 * @param {Object} payload:{code:es el identificador del producto,quantity: es la nueva cantidad del procucto}
 * @returns {Object} action
 */
export const changeQuantityProduct = payload => ({type:actions.CHANGE_QUANTITY,payload});


/**
 * @description se encarga de cancelar la venta
 * @returns {Object} action
 */
export const cancelSell = () => ({type:actions.CANCEL_SELL});

/**
 * @description se encarga de selecionar una fila
 * @param {Object} {code:identificador de la fila}
 * @returns {Object} action
 */
export const selectProduct = payload => ({type:actions.SELECTED_PRODUCT,payload});

/**
 * @description se encarga de borrar los productos selecionados
 * @returns {Object} action
 */
export const delSelectedProduct = () => ({type:actions.DEL_SELECTED_PRODUCT});




