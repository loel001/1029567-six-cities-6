import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute} from "../common/const";
import {adaptPlaceToClient} from "./adapter";

export const fetchPlaceList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadPlaces(data.map((place) => adaptPlaceToClient(place)))))
);

export const fetchFavoritePlaceList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.FAVORITE)
    .then(({data}) => dispatch(ActionCreator.loadFavoritesPlaces(data.map((favoritePlace) => adaptPlaceToClient(favoritePlace)))))
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
