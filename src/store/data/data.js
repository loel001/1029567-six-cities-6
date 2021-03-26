import {createReducer} from '@reduxjs/toolkit';
import {
  loadPlaces,
  loadFavoritesPlaces,
  loadReviews,
  resetIsReviewsLoaded,
} from '../action';

const initialState = {
  places: [],
  isDataLoaded: false,
  favoritesPlaces: [],
  isDataFavoriteLoaded: false,
  isReviewsLoaded: false,
  propertyReviews: []
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
});

export {data};
