import { DELETE, ADD } from './constants';

export const add = data => {
  return { type: ADD, payload: data };
};
export const deletion = id => {
  return { type: DELETE, payload: id };
};
