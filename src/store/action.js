export const ActionType = {
  CHANGE_CITY: `changeCity`,
  GET_PLACES: `getPlaces`,
  CHANGE_SORTING: `changeSorting`,
  GET_ACTIVE_PLACE: `getActivePlace`
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
  })
};