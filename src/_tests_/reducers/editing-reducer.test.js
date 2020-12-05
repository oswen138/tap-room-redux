import * as g from '../actions/ActionTypes';

export default (state=false, action) => {
  switch(action.type) {
    case g.TOGGLE_EDITING:
      return !state;
    default:
      return state;
  };
}