import { SEARCH } from './constants';

export const search = value => {
  return { type: SEARCH, payload: value };
};
