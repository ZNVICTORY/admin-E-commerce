import { combineReducers } from 'redux'
import user from './user/index'
import {product} from './product/index'
import { order} from './order/order'

export default combineReducers({user, product, order})