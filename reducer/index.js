import {combineReducers} from 'redux';
import {basketReducer} from './basket.reducer.js';
import {stockReducer} from './stock.reducer.js';

const reducer = combineReducers({
  basket: basketReducer,
  stock: stockReducer
});

export default reducer;