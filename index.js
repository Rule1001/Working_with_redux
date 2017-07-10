import { createStore } from 'redux';
import reducer from './reducer';
import * as actions from './actions/actions'

const store = createStore(reducer);

store.subscribe(function() {
  console.log('The State has changed')
})

console.log(store.getState());

store.dispatch(actions.addToBasket('Pineapple'));
store.dispatch(actions.addToBasket('Pineapple'));

console.log(store.getState());

