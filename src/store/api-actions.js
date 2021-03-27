import {
  requireAuthorization,
  authorizationInfo,
  redirectToRoute,
  loadPlaces,
  loadFavoritesPlaces,
  loadReviews,
  updateFavoritePlace,
  loadPropertyData,
  loadPropertyNearby,
  setErrorMessage
} from './action';
import {AuthorizationStatus, AppRoute, HttpCode} from "../common/const";
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
  Promise.all([
    api.get(`${AppRoute.HOTELS}/${id}`),
    api.get(`${AppRoute.HOTELS}/${id}/nearby`),
  ])
    .then(([offer, nearby]) => {
      dispatch(loadPropertyData(adaptPlaceToClient(offer.data)));
      dispatch(loadPropertyNearby(nearby.data.map((nearbyOffer) => adaptPlaceToClient(nearbyOffer))));
    })
    .catch((err) => {
      const {response} = err;
      switch (response.status) {
        case HttpCode.NOT_FOUND:
          dispatch(redirectToRoute(AppRoute.ERROR));
          break;

        default:
          dispatch(setErrorMessage(response.status));
          break;
      }
    });
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
