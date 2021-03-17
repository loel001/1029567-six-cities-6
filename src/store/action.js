export const ActionType = {
  CHANGE_CITY: `changeCity`,
  CHANGE_SORTING: `changeSorting`,
  GET_ACTIVE_PLACE: `getActivePlace`,
  LOAD_PLACES: `loadPlaces`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
  AUTHORIZATION_INFO: `authorizationInfo`,
  LOAD_FAVORITES_PLACES: `loadFavoritesPlaces`
};

export const ActionCreator = {
  changeCity: (selectedCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: selectedCity,
  }),
  changeSorting: (selectedSorting) => ({
    type: ActionType.CHANGE_SORTING,
    payload: selectedSorting,
  }),
  getActivePlace: (activePlaceId) => ({
    type: ActionType.GET_ACTIVE_PLACE,
    payload: activePlaceId,
  }),
  loadPlaces: (places) => ({
    type: ActionType.LOAD_PLACES,
    payload: places
  }),

  loadFavoritesPlaces: (favoritesPlaces) => ({
    type: ActionType.LOAD_FAVORITES_PLACES,
    payload: favoritesPlaces
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
  authorizationInfo: (info) => ({
    type: ActionType.AUTHORIZATION_INFO,
    payload: info
  })
};
