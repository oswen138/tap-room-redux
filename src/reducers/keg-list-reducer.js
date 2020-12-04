export default (state = {}, action) => {
  const {name, brand, price, alcoholContent, flavor, kegs, id } = action;
  switch (action.type) {
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          flavor: flavor,
          kegs: kegs,
          id: id
        }
      });
    default:
       return state;
  }
};