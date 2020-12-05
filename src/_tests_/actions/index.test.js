import * as actions from './../../actions';
import * as g from '../../actions/ActionTypes';


describe('keg actions', () => {
  test('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: g.DELETE_KEG,
      id: 1
    });
  });

  test('toggleForm should create toggle form action', () => {
    expect(actions.toggleForm()).toEqual({
      type: g.TOGGLE_FORM
    });
  });

  test('toggleEditing should create toggle editing action', () => {
    expect(actions.toggleEditing()).toEqual({
      type: g.TOGGLE_EDITING
    });
  });

  test('addKeg should create ADD_KEG action', () => { 
    expect(actions.addKeg({
      name: "Savannah Dragon", 
      brand: "MousHaus", 
      price: 5, 
      alcoholContent: 3,
      flavor: "Raspberry-lime", 
      kegs: 10, 
      id: 3
    })).toEqual({
      type: g.ADD_KEG,
      name: "Savannah Dragon", 
      brand: "MousHaus", 
      price: 5, 
      alcoholContent: 3,
      flavor: "Raspberry-lime", 
      kegs: 10, 
      id: 3
    });
  });
});
