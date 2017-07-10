import * as types from '../actions/types';
const initialState = {};

export function basketReducer (prevState = initialState, action) {
  if (!action) return prevState;

  if (action.type === types.ADD_TO_BASKET) {
    if (!action.item) return prevState;

    const newState = Object.assign({}, prevState);
    
    // Update basket
    newState[action.item] ? newState[action.item]++ : newState[action.item] = 1;

    return newState;
  }

  return prevState;
}