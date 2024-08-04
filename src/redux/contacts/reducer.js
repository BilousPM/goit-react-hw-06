import { nanoid } from 'nanoid';

const initialState = {
  contact: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        contact: [...state.contact, { id: nanoid(), ...action.payload }],
      };
    case 'DELETE':
      return {
        ...state,
        contact: state.contact.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default contactReducer;
