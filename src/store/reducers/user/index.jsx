import actionTypes from './actionTypes'

const defaultState = {
  username: '',
  password: '',
  redirectPath: ''
}
/**
 * @param {*} state 
 * @param {*} action 
 */
function user(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.AUTH_SUCCESS:
      return { defaultState, ...action.payload, redirectPath: '/home' };
    case actionTypes.ERRORDATA:
      return { defaultState, msg: action.payload };
    default: return state
  }
}
export default user
export * from './actions'