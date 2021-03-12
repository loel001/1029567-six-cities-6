import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute} from "../common/const";
import {adaptPlaceToClient} from "./adapter";

export const fetchPlaceList = () => (dispatch, _getState, api) => (
  api.get(AppRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadPlaces(data.map((place) => adaptPlaceToClient(place)))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(AppRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(AppRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
