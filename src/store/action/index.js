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