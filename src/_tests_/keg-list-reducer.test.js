import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;

  const currentState = {
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    flavor: flavor,
    kegs: kegs,
    id: id
  }

  const kegData = {
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    flavor: flavor,
    kegs: kegs,
    id: id
  };

  test('Should return default state if no action type is recognized', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new ticket data to masterTicketList', () => {
    const { names, location, issue, id } = ticketData;
    action = {
      type: 'ADD_TICKET',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      flavor: flavor,
      kegs: kegs,
      id: id
    };
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        flavor: flavor,
        kegs: kegs,
        id: id
      }
    });
  });

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 }
    });
  });

});