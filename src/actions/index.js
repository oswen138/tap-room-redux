import * as g from './ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, alcoholContent, flavor, kegs, id} = keg;
  return {
    type: g.ADD_KEG,
    name: name, 
    brand: brand, 
    price: price, 
    alcoholContent: alcoholContent,
    flavor: flavor, 
    kegs: kegs, 
    id: id
  };
}

export const selectKeg = (keg) => {
  const { name, brand, price, alcoholContent, flavor, kegs, id} = keg;
  return {
    type: g.SELECT_KEG,
    name: name, 
    brand: brand, 
    price: price, 
    alcoholContent: alcoholContent,
    flavor: flavor, 
    kegs: kegs, 
    id: id
  };
}

export const deleteKeg = (id) => ({
  type: g.DELETE_KEG,
  id: id
})

export const toggleEditing = () => ({
  type: g.TOGGLE_EDITING
})

export const toggleForm = () => ({
  type: g.TOGGLE_FORM
})

