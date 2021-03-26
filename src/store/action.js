import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  AUTHORIZATION_INFO: `user/authorizationInfo`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_CITY: `places/changeCity`,
  CHANGE_SORTING: `places/changeSorting`,
  GET_ACTIVE_PLACE: `places/getActivePlace`,
  LOAD_PLACES: `data/loadPlaces`,
  REDIRECT_TO_ROUTE: `data/redirectToRoute`,
  LOAD_FAVORITES_PLACES: `data/loadFavoritesPlaces`,
  LOAD_REVIEWS: `data/loadReviews`,
  RESET_IS_REVIEWS_LOADED: `data/resetIsReviewsLoaded`
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (selectedCity) => {
  return {
    payload: selectedCity,
  };
});

export const changeSorting = createAction(ActionType.CHANGE_SORTING, (selectedSorting) => {
  return {
    payload: selectedSorting,
  };
});

export const getActivePlace = createAction(ActionType.GET_ACTIVE_PLACE, (activePlaceId) => {
  return {
    payload: activePlaceId,
  };
});

export const loadPlaces = createAction(ActionType.LOAD_PLACES, (places) => {
  return {
    payload: places,
  };
});

export const loadFavoritesPlaces = createAction(ActionType.LOAD_FAVORITES_PLACES, (favoritesPlaces) => {
  return {
    payload: favoritesPlaces,
  };
});

export const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => {
  return {
    payload: status,
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => {
  return {
    payload: url,
  };
});

export const authorizationInfo = createAction(ActionType.AUTHORIZATION_INFO, (info) => {
  return {
    payload: info,
  };
});

export const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => {
  return {
    payload: reviews,
  };
});

export const resetIsReviewsLoaded = createAction(ActionType.RESET_IS_REVIEWS_LOADED);
