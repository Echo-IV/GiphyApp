import reducer from './searchReducer';
import {
  SEARCH_GIFS,
  SEARCH_GIFS_SUCCESS,
  SEARCH_GIFS_ERROR,
} from '../actions/actionTypes';

it("should return an array of gis", () => {
  const previousState = {
    gifs: [],
    visibleLoader: true
  };

  const action = {
    type: SEARCH_GIFS_SUCCESS,
    gifs: [
      {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "http://placehold.it/600/92c952",
        thumbnailUrl: "http://placehold.it/150/92c952"
      },
      {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "http://placehold.it/600/771796",
        thumbnailUrl: "http://placehold.it/150/771796"
      }]
  }

  const expectedState = {
    gifs: action.gifs,
    visibleLoader: false
  }

  expect(
    reducer(previousState, action)
  ).toEqual(expectedState);

});

it("should return nothing due to error", () => {
  const previousState = {
    visibleLoader: true
  }

  const action = {
    type: SEARCH_GIFS_ERROR,
    error: 'failed to fetch data'
  }

  const expectedState = {
    visibleLoader: false
  }

  expect(
    reducer(previousState, action)
  ).toEqual(expectedState);

});