import {expect} from 'chai';
import * as types from '../actions/types';
import * as actions from '../actions/actions';

describe('ACTIONS', function () {
  describe('addToBasket', function () {
    it('returns the expected action', function () {
      expect(actions.addToBasket('Almonds')).to.eql({
        type: types.ADD_TO_BASKET,
        item: 'Almonds'
      });
    });
  });
});