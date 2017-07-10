import {combineReducers} from 'redux';
import basketReducer from './basket.reducer.js'
import stockReducer from './stock.reducer.js'


export default combineReducers({
  basket: basketReducer,
  stock: stockReducer


})