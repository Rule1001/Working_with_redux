import { expect } from 'chai';
import * as actions from '../actions/actions';
import reducer from '../reducer/index';

const initialState = {
  basket: {

  },
  stock: {
    'Tomato': 10,
    'Tofu': 10,
    'Potato': 10
  }
};

describe('REDUCER', function () {
  it('is a function', function () {
    expect(reducer).to.be.a('function');
  });
  describe('action: ADD_TO_BASKET', function () {
    it('returns the updated state', function () {
      const action = actions.addToBasket('Tofu');
      const newState = reducer(initialState, action);
      expect(newState).to.eql({
        basket: { Tofu: 1 },
        stock: {
          'Tomato': 10,
          'Tofu': 9,
          'Potato': 10
        }
      });
    });

    it('does not mutate the initialState', function () {
      const action = actions.addToBasket('Tofu');
      const newState = reducer(initialState, action);
      expect(newState).to.not.equal(initialState);
      expect(newState.basket).to.not.equal(initialState.basket);
    });
  });
});