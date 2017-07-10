import { expect } from 'chai';
import { reducer, initialState } from '../reducer/reducer';
import * as actions from '../actions/actions';

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

    it('does nothing if the requested item is not in stock', function () {
      const action = actions.addToBasket('Mung beans');
      const newState = reducer(initialState, action);
      expect(newState).to.eql(initialState);
      expect(newState).to.equal(initialState);
    });

    it('does not mutate the initialState', function () {
      const action = actions.addToBasket('Tofu');
      const newState = reducer(initialState, action);
      expect(newState).to.not.equal(initialState);
      expect(newState.basket).to.not.equal(initialState.basket);
    });
  });
});