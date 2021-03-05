import places from '../mocks/places';
import {ActionType} from './action';
import {getPlacesCity, sortPlaces} from '../common/utils';
import {CIIES, SortingTypes} from "../common/const";

const initialState = {
  places,
  activeCity: CIIES[0],
  activeSorting: SortingTypes.POPULAR
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };

    case ActionType.CHANGE_SORTING:
      return {
        ...state,
        activeSorting: action.payload
      };

    case ActionType.GET_PLACES:
      return {
        ...state,
        places: sortPlaces(getPlacesCity(initialState.places, state.activeCity), state.activeSorting)
      };
  }

  return state;
};


export {reducer};
