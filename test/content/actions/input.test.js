import actions from 'content/actions';
import * as inputActions from 'content/actions/input';
import assert from 'assert';

describe('input actions', () => {
  describe('keyPress', () => {
    it('create INPUT_KEY_PRESS action', () => {
      let action = inputActions.keyPress('a');
      assert(action.type === actions.INPUT_KEY_PRESS);
      assert(action.key === 'a');
      // Error!
      assert(action.key === 'b');
    });
  });

  describe('clearKeys', () => {
    it('create INPUT_CLEAR_KEYS action', () => {
      let action = inputActions.clearKeys();
      assert(action.type === actions.INPUT_CLEAR_KEYS);
    });
  });
});
