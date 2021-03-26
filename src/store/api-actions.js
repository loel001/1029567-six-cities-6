import {
  requireAuthorization,
  authorizationInfo,
  redirectToRoute,
  loadPlaces,
  loadFavoritesPlaces,
  loadReviews,
  updateFavoritePlace,
  loadPropertyData,
  loadPropertyNearby
} from './action';
import {AuthorizationStatus, AppRoute} from "../common/const";
import {adaptPlaceToClient, adaptReviewToClient} from "./adapter";

export const fetchPlaceList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.HOTELS)
    .then(({data}) => dispatch(loadPlaces(data.map((place) => adaptPlaceToClient(place)))))
    .catch(() => {})
);

export const fetchFavoritePlaceList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.FAVORITE)
    .then(({data}) => dispatch(loadFavoritesPlaces(data.map((favoritePlace) => adaptPlaceToClient(favoritePlace)))))
    .catch(() => {})
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN)
    .then(({data}) => dispatch(authorizationInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const logIn = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
    .then(({data}) => dispatch(authorizationInfo(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
    .catch(() => {})
);

export const logOut = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGOUT)
    .then(() => dispatch(authorizationInfo({})))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .catch(() => {})
);

export const fetchProperty = (id) => (dispatch, _getState, api) => {
  api.get(`${AppRoute.HOTELS}/${id}`)
    .then(({data}) => adaptPlaceToClient(data))
    .then((data) => dispatch(loadPropertyData(data)))
    .catch(() => {});
};

export const fetchNearPlaces = (id) => (dispatch, _getState, api) => {
  api.get(`${AppRoute.HOTELS}/${id}/nearby`)
    .then(({data}) => data.map((it) => adaptPlaceToClient(it)))
    .then((data) => dispatch(loadPropertyNearby(data)))
    .catch(() => {});
};

export const fetchPropertyReviews = (placeId) => (dispatch, _getState, api) => {
  api.get(`${AppRoute.COMMENTS}/${placeId}`)
    .then(({data}) => dispatch(loadReviews(data.map((review) => adaptReviewToClient(review)))))
    .catch(() => {});
};

export const sendPropertyReview = (id, {rating, comment}) => (dispatch, _getState, api) => {
  api.post(`${AppRoute.COMMENTS}/${id}`, {rating, comment})
    .then(({data}) => dispatch(loadReviews(data.map((review) => adaptReviewToClient(review)))))
    .catch(() => {});
};

export const changeFavorite = ({id, status}) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${status}`)
    .then(({data}) => (adaptPlaceToClient(data)))
    .then((data) => dispatch(updateFavoritePlace(data)))
);
