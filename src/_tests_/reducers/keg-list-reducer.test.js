import kegListReducer from  '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';

describe ('kegListReducer', () => {
  test('it should return the default state given a null action type', () => {
    expect(kegListReducer(undefined, {type:null})).toEqual({
      1: {name: "Perky Pear", brand: "MousHaus", price: '5', alcoholContent: '3', flavor: "Pear-Ginger", kegs: 5, id: 1},
      2: {name: "Teary Berry", brand: "Biko Juices", price: '5', alcoholContent: '3', flavor: "Blueberry-Boysenberry", kegs: 8, id: 2},
      3: {name: "Savannah Dragon", brand: "MousHaus", price: '5', alcoholContent: '3', flavor: "Raspberry-lime", kegs: 10, id: 3},
      4: {name: "Loopy Strawberry", brand: "Biko Juices", price: '5', alcoholContent: '3', flavor: "Strawberry-Mint", kegs: 12, id: 4}
    });
  });

  test('should successfully add new keg to masterKegList', () => {
    const kegData = {
      name: "Savannah Dragon", 
      brand: "MousHaus", 
      price: 5, 
      alcoholContent: 3,
      flavor: "Raspberry-lime", 
      kegs: 10, 
      id: 3
    };
    const { name, brand, price, alcoholContent, flavor, kegs, id} = kegData;
    const action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      flavor: flavor,
      kegs: kegs,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: "Savannah Dragon", 
        brand: "MousHaus", 
        price: 5, 
        alcoholContent: 3,
        flavor: "Raspberry-lime", 
        kegs: 10, 
        id: 3
      }
    });
  });

  test('should successfully delete a keg', () => {
    const currentState = {
      1: {
      name: "Savannah Dragon", 
      brand: "MousHaus", 
      price: 5, 
      alcoholContent: 3,
      flavor: "Raspberry-lime", 
      kegs: 10, 
      id: 3},
      2: {
      name: "Loopy Strawberry", 
      brand: "Biko Juices", 
      price: 5, 
      alcoholContent: 3, 
      flavor: "Strawberry-Mint", 
      kegs: 12, 
      id: 4 },
    };
    const action = {
      type: c.DELETE_KEG,
      name: "Savannah Dragon", 
      brand: "MousHaus", 
      price: 5, 
      alcoholContent: 3,
      flavor: "Raspberry-lime", 
      kegs: 10, 
      id: 3,
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
      name: "Loopy Strawberry", 
      brand: "Biko Juices", 
      price: 5, 
      alcoholContent: 3, 
      flavor: "Strawberry-Mint", 
      kegs: 12, 
      id: 4 },
    });
  });
})