import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as g from '../../actions/ActionTypes';

describe('formVisibleReducer', () => {
  test('should return default state with null action type', () => {
    expect(formVisibleReducer(undefined, {type: null})).toEqual(false);
  });

  test('should toggle form visibility state to true', () => {
    expect(formVisibleReducer(false, {type:g.TOGGLE_FORM})).toEqual(true)
  })
})