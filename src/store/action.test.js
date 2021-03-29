import {
  ActionType,
  authorizationInfo,
  changeCity,
  changeSorting,
  getActivePlace,
  loadPlaces,
  requireAuthorization,
  redirectToRoute,
  loadFavoritesPlaces,
  loadReviews,
  resetIsReviewsLoaded,
  updateFavoritePlace,
  loadPropertyData,
  loadPropertyNearby,
  setErrorMessage,
  changeIsFavoriteProperty
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing city returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: `Paris`
    };
    expect(changeCity(`Paris`)).toEqual(expectedAction);
  });

  it(`Action creator for incrementing sorting returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORTING,
      payload: `Popular`
    };
    expect(changeSorting(`Popular`)).toEqual(expectedAction);
  });

  it(`Action creator for incrementing active place id returns correct action`, () => {
    const expectedAction = {
      type: ActionType.GET_ACTIVE_PLACE,
      payload: 1
    };
    expect(getActivePlace(1)).toEqual(expectedAction);
  });

  it(`Action creator for loading places returns correct action`, () => {
    const places = [{
      "bedrooms": 3,
      "city": {
        "location": {
          "latitude": 52.370216,
          "longitude": 4.895168,
          "zoom": 10
        },
        "name": `Amsterdam`
      },
      "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      "host": {
        "avatar_url": `img/1.png`,
        "id": 3,
        "is_pro": true,
        "name": `Angelina`
      },
      "id": 1,
      "images": [`img/1.png`, `img/2.png`],
      "is_favorite": false,
      "is_premium": false,
      "location": {
        "latitude": 52.35514938496378,
        "longitude": 4.673877537499948,
        "zoom": 8
      },
      "max_adults": 4,
      "preview_image": `img/1.png`,
      "price": 120,
      "rating": 4.8,
      "title": `Beautiful & luxurious studio at great location`,
      "type": `apartment`
    }];
    const expectedAction = {
      type: ActionType.LOAD_PLACES,
      payload: places
    };
    expect(loadPlaces(places)).toEqual(expectedAction);
  });

  it(`Action creator for loading favorite places returns correct action`, () => {
    const places = [{
      "bedrooms": 3,
      "city": {
        "location": {
          "latitude": 52.370216,
          "longitude": 4.895168,
          "zoom": 10
        },
        "name": `Amsterdam`
      },
      "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      "host": {
        "avatar_url": `img/1.png`,
        "id": 3,
        "is_pro": true,
        "name": `Angelina`
      },
      "id": 1,
      "images": [`img/1.png`, `img/2.png`],
      "is_favorite": false,
      "is_premium": false,
      "location": {
        "latitude": 52.35514938496378,
        "longitude": 4.673877537499948,
        "zoom": 8
      },
      "max_adults": 4,
      "preview_image": `img/1.png`,
      "price": 120,
      "rating": 4.8,
      "title": `Beautiful & luxurious studio at great location`,
      "type": `apartment`
    }];
    const expectedAction = {
      type: ActionType.LOAD_FAVORITES_PLACES,
      payload: places
    };
    expect(loadFavoritesPlaces(places)).toEqual(expectedAction);
  });

  it(`Action creator for requiring authorization returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`
    };
    expect(requireAuthorization(`AUTH`)).toEqual(expectedAction);
  });

  it(`Action creator for redirecting to route returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`
    };
    expect(redirectToRoute(`/`)).toEqual(expectedAction);
  });

  it(`Action creator for change authorization info returns correct action`, () => {
    const authInfo = {
      "avatar_url": `img/1.png`,
      "email": `Oliver.conner@gmail.com`,
      "id": 1,
      "is_pro": false,
      "name": `Oliver.conner`
    };

    const expectedAction = {
      type: ActionType.AUTHORIZATION_INFO,
      payload: authInfo
    };
    expect(authorizationInfo(authInfo)).toEqual(expectedAction);
  });

  it(`Action creator for loading reviews returns correct action`, () => {
    const reviews = [{
      "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "date": `2019-05-08T14:13:56.569Z`,
      "id": 1,
      "rating": 4,
      "user": {
        "avatar_url": `img/1.png`,
        "id": 4,
        "is_pro": false,
        "name": `Max`
      }
    }];

    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews
    };
    expect(loadReviews(reviews)).toEqual(expectedAction);
  });

  it(`Action creator for reset reviews returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_IS_REVIEWS_LOADED,
    };
    expect(resetIsReviewsLoaded()).toEqual(expectedAction);
  });

  it(`Action creator for update favorite place returns correct action`, () => {
    const places = [{
      "bedrooms": 3,
      "city": {
        "location": {
          "latitude": 52.370216,
          "longitude": 4.895168,
          "zoom": 10
        },
        "name": `Amsterdam`
      },
      "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      "host": {
        "avatar_url": `img/1.png`,
        "id": 3,
        "is_pro": true,
        "name": `Angelina`
      },
      "id": 1,
      "images": [`img/1.png`, `img/2.png`],
      "is_favorite": false,
      "is_premium": false,
      "location": {
        "latitude": 52.35514938496378,
        "longitude": 4.673877537499948,
        "zoom": 8
      },
      "max_adults": 4,
      "preview_image": `img/1.png`,
      "price": 120,
      "rating": 4.8,
      "title": `Beautiful & luxurious studio at great location`,
      "type": `apartment`
    }];

    const expectedAction = {
      type: ActionType.UPDATE_FAVORITE_PLACE,
      payload: places
    };
    expect(updateFavoritePlace(places)).toEqual(expectedAction);
  });

  it(`Action creator for loading property returns correct action`, () => {
    const place = {
      "bedrooms": 3,
      "city": {
        "location": {
          "latitude": 52.370216,
          "longitude": 4.895168,
          "zoom": 10
        },
        "name": `Amsterdam`
      },
      "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      "host": {
        "avatar_url": `img/1.png`,
        "id": 3,
        "is_pro": true,
        "name": `Angelina`
      },
      "id": 1,
      "images": [`img/1.png`, `img/2.png`],
      "is_favorite": false,
      "is_premium": false,
      "location": {
        "latitude": 52.35514938496378,
        "longitude": 4.673877537499948,
        "zoom": 8
      },
      "max_adults": 4,
      "preview_image": `img/1.png`,
      "price": 120,
      "rating": 4.8,
      "title": `Beautiful & luxurious studio at great location`,
      "type": `apartment`
    };

    const expectedAction = {
      type: ActionType.LOAD_PROPERTY_DATA,
      payload: place
    };
    expect(loadPropertyData(place)).toEqual(expectedAction);
  });

  it(`Action creator for loading places nearby returns correct action`, () => {
    const places = [{
      "bedrooms": 3,
      "city": {
        "location": {
          "latitude": 52.370216,
          "longitude": 4.895168,
          "zoom": 10
        },
        "name": `Amsterdam`
      },
      "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      "host": {
        "avatar_url": `img/1.png`,
        "id": 3,
        "is_pro": true,
        "name": `Angelina`
      },
      "id": 1,
      "images": [`img/1.png`, `img/2.png`],
      "is_favorite": false,
      "is_premium": false,
      "location": {
        "latitude": 52.35514938496378,
        "longitude": 4.673877537499948,
        "zoom": 8
      },
      "max_adults": 4,
      "preview_image": `img/1.png`,
      "price": 120,
      "rating": 4.8,
      "title": `Beautiful & luxurious studio at great location`,
      "type": `apartment`
    }];

    const expectedAction = {
      type: ActionType.LOAD_PROPERTY_NEARBY,
      payload: places
    };
    expect(loadPropertyNearby(places)).toEqual(expectedAction);
  });

  it(`Action creator for setting error message returns correct action`, () => {
    const expectedAction = {
      type: ActionType.SET_ERROR_MESSAGE,
      payload: `404`
    };
    expect(setErrorMessage(`404`)).toEqual(expectedAction);
  });

  it(`Action creator for change favorite property returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_IS_FAVORITE_PROPERTY,
    };
    expect(changeIsFavoriteProperty()).toEqual(expectedAction);
  });
});
