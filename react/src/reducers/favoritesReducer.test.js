import reducer from './favoritesReducer';
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE
} from '../actions/actionTypes.js';

it('should have an empty array as initial state', () => {
  expect(
    reducer(undefined)
  ).toEqual([]);
});

it('should handle ADD_FAVORITE action type', () => {
  const previousState = [
    { id: 1 },
    { id: 2 }
  ];

  const action = {
    type: ADD_FAVORITE,
    favorite: { id: 3 }
  };

  const expectedState = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  expect(
    reducer(previousState, action)
  ).toEqual(expectedState);
});

it('should handle REMOVE action type', () => {
  const previousState = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  const action = {
    type: REMOVE_FAVORITE,
    id: 2
  };

  const expectedState = [
    { id: 1 },
    { id: 3 }
  ];

  expect(
    reducer(previousState, action)
  ).toEqual(expectedState);
});
