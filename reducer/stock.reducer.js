import * as types from '../actions/types';

const initialState = {
  'Tomato': 10,
  'Tofu': 10,
  'Potato': 10
};

export function stockReducer (prevState = initialState, action) {
  if (!action) return prevState;

  if (action.type === types.ADD_TO_BASKET) {
    if (!action.item) return prevState;

    if (!prevState[action.item]) return prevState;

    const newState = Object.assign({}, prevState);

    // Update stock
    newState[action.item] > 1 ? newState[action.item]-- : delete newState[action.item];

    return newState;
  }

  return prevState;
}