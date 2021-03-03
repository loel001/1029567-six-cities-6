import places from '../mocks/places';
import {ActionType} from './action';
import {getPlacesCity} from '../common/utils';

const initialState = {
  places,
  activeCity: `Paris`,
  activeSorting: `Popular`
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload
      };

    case ActionType.GET_PLACES:
      return {
        ...state,
        places: getPlacesCity(initialState.places, state.activeCity)
      };

    case ActionType.CHANGE_SORTING:
      return {
        ...state,
        activeSorting: action.payload
      };

    case ActionType.GET_SORTING_PLACES:
      return {
        ...state,
        places: getSortingPlaces(initialState.places, state.activeSorting)
      };
  }

  return state;
};


export {reducer};
