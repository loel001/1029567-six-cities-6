import places from '../mocks/places';
import {ActionType} from './action';
import {getPlacesCity} from '../common/utils';

const initialState = {
  places,
  activeCity: `Paris`
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
  }

  return state;
};


export {reducer};
