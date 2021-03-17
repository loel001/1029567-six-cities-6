import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute} from "../common/const";
import {adaptPlaceToClient, adaptReviewToClient} from "./adapter";
import {api as loadApi} from '../index';

export const fetchPlaceList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadPlaces(data.map((place) => adaptPlaceToClient(place)))))
    .catch(() => {})
);

export const fetchFavoritePlaceList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.FAVORITE)
    .then(({data}) => dispatch(ActionCreator.loadFavoritesPlaces(data.map((favoritePlace) => adaptPlaceToClient(favoritePlace)))))
    .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN)
    .then(({data}) => dispatch(ActionCreator.authorizationInfo(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const logIn = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.authorizationInfo(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
    .catch(() => {})
);

export const logOut = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGOUT)
    .then(() => dispatch(ActionCreator.authorizationInfo({})))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

export const fetchProperty = (id) => {
  return loadApi.get(`${AppRoute.HOTELS}/${id}`)
    .then(({data}) => adaptPlaceToClient(data));
};

export const fetchNearPlaces = (id) => {
  return loadApi.get(`${AppRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => data.map((it) => adaptPlaceToClient(it)));
};

export const fetchPropertyReviews = (placeId) => (dispatch, _getState, api) => {
  api.get(`${AppRoute.COMMENTS}/${placeId}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data.map((review) => adaptReviewToClient(review)))))
    .catch(() => {});
};

export const sendPropertyReview = (id, {rating, comment}) => (dispatch, _getState, api) => {
  api.post(`${AppRoute.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => dispatch(ActionCreator.loadReviews(data.map((review) => adaptReviewToClient(review)))))
    .catch(() => {});
};
