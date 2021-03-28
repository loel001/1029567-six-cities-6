import {createReducer} from '@reduxjs/toolkit';
import {changeFavoritePlaces, updatePlaces, updateNearPlaces} from '../../common/utils';

import {
  loadPlaces,
  loadFavoritesPlaces,
  loadReviews,
  resetIsReviewsLoaded,
  updateFavoritePlace,
  loadPropertyData,
  loadPropertyNearby,
  changeIsFavoriteProperty
} from '../action';

const initialState = {
  places: [],
  isDataLoaded: false,
  favoritesPlaces: [],
  isDataFavoriteLoaded: false,
  isReviewsLoaded: false,
  propertyReviews: [],
  currentProperty: {},
  nearPlaces: [],
  isInfoLoaded: false,
  isNearbyLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder.addCase(loadPlaces, (state, action) => {
    state.places = action.payload;
    state.isDataLoaded = true;
  });

  builder.addCase(loadFavoritesPlaces, (state, action) => {
    state.favoritesPlaces = action.payload;
    state.isDataFavoriteLoaded = true;
  });

  builder.addCase(loadReviews, (state, action) => {
    state.propertyReviews = action.payload;
    state.isReviewsLoaded = true;
  });

  builder.addCase(resetIsReviewsLoaded, (state) => {
    state.propertyReviews = [];
    state.isReviewsLoaded = false;
  });

  builder.addCase(loadPropertyData, (state, action) => {
    state.currentProperty = action.payload;
    state.isInfoLoaded = true;
  });

  builder.addCase(loadPropertyNearby, (state, action) => {
    state.nearPlaces = action.payload;
    state.isNearbyLoaded = true;
  });

  builder.addCase(updateFavoritePlace, (state, action) => {
    state.favoritesPlaces = changeFavoritePlaces(state.favoritesPlaces, action.payload);
    state.places = updatePlaces(state.places, action.payload);
    state.nearPlaces = updateNearPlaces(state.nearPlaces, action.payload);
  });

  builder.addCase(changeIsFavoriteProperty, (state) => {
    state.currentProperty = Object.assign({}, state.currentProperty, {isFavorite: !state.currentProperty.isFavorite});
  });
});

export {data};
