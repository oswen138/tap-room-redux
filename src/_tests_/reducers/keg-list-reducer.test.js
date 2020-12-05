import kegListReducer from  '../../reducers/keg-list-reducer';
import * as g from '../../actions/ActionTypes';

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
      alcoholContent: 3
      flavor: "Raspberry-lime", 
      kegs: 10, 
      id: 1
    };
    const { name, brand, price, alcoholContent, flavor, kegs, id} = kegData;
    const action = {
      type: g.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quantity: quantity,
      id: id
    };
    expect(productListReducer({}, action)).toEqual({
      [id]: {
        name: "Gratuitous Grape", 
        brand: "The Kombucha Bar", 
        price: 3.00, 
        flavor: "Grape", 
        quantity: 50, 
        id: 1
      }
    });
  });

  test('should successfully delete a product', () => {
    const currentState = {
      1: {name: "Gingerberry Goddess", 
      brand: "Vanessa's Kombuchary", 
      price: 3.25, flavor: "Gingerberry", 
      quantity: 1, 
      id: 1},
      2: {name: "Mystic Mango", 
      brand: "Booch Boulevard, LLC", 
      price: 3.99, 
      flavor: "Mango", 
      quantity: 10, 
      id: 2},
    };
    const action = {
      type: c.DELETE_PRODUCT,
      name: "Gingerberry Goddess", 
      brand: "Vanessa's Kombuchary", 
      price: 3.25, flavor: "Gingerberry", 
      quantity: 1, 
      id: 1
    };
    expect(productListReducer(currentState, action)).toEqual({
      2: {name: "Mystic Mango", 
      brand: "Booch Boulevard, LLC", 
      price: 3.99, 
      flavor: "Mango", 
      quantity: 10, 
      id: 2},
    });
  });
})