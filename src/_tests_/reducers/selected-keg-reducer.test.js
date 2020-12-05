import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as g from '../../actions/ActionTypes';

describe('selectedKegReducer', () => {
  const masterKegList = {
    1: {
      name: "Perky Pear", 
      brand: "MousHaus", 
      price: 5, 
      alcoholContent: 3,
      flavor: "Pear-ginger", 
      kegs: 10, 
      id: 1
    },
    2: {
      name: "Teary Berry", 
      brand: "Biko Juices", 
      price: 5, 
      alcoholContent: 3,
      flavor: "Blueberry-Boysenberry", 
      kegs: 10, 
      id: 2
    }
  };

  let action;

  test('should return default state given null action type', () => {
    expect(selectedKegReducer(undefined, {type: null})).toEqual(null);
  });

  test('should successfully store selectedKeg', () => {
    action = {
      type: g.SELECT_KEG,
      name: "Perky Pear", 
      brand: "MousHaus", 
      price: 5, 
      alcoholContent: 3,
      flavor: "Pear-ginger", 
      kegs: 10, 
      id: 1
    };

    expect(selectedKegReducer({masterKegList: masterKegList}, action)).toEqual({
      name: "Perky Pear", 
      brand: "MousHaus", 
      price: 5, 
      alcoholContent: 3,
      flavor: "Pear-ginger", 
      kegs: 10, 
      id: 1
    });
  });

})