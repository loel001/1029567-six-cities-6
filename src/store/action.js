export const ActionType = {
  CHANGE_CITY: `changeCity`,
  GET_PLACES: `getPlaces`,
  GET_FAVORITE_PLACES: `getFavoritePlaces`
};

export const ActionCreator = {
  changeCity: (selectedCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: selectedCity,
  }),
  getPlaces: () => ({
    type: ActionType.GET_PLACES,
  }),
  getFavoritePlaces: () => ({
    type: ActionType.GET_FAVORITE_PLACES,
  })
};
