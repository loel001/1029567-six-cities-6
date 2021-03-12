export const ActionType = {
  CHANGE_CITY: `changeCity`,
  GET_PLACES: `getPlaces`,
  CHANGE_SORTING: `changeSorting`,
  GET_ACTIVE_PLACE: `getActivePlace`,
  LOAD_PLACES: `loadPlaces`,
  REQUIRED_AUTHORIZATION: `requiredAuthorization`,
  REDIRECT_TO_ROUTE: `redirectToRoute`,
};

export const ActionCreator = {
  changeCity: (selectedCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: selectedCity,
  }),
  getPlaces: () => ({
    type: ActionType.GET_PLACES,
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  })
};
