import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {AuthorizationStatus, AppRoute} from "../common/const";
import {
  fetchPlaceList,
  fetchFavoritePlaceList,
  checkAuth,
  logIn,
  logOut,
  fetchProperty,
  fetchPropertyReviews,
  sendPropertyReview,
  changeFavorite
} from './api-actions';

const api = createAPI(() => {});

const initialPlace = {
  "id": 1,
  "host": {
    "avatar_url": `image/avatar.jpg`,
    "is_pro": false
  },
  "is_favorite": false,
  "is_premium": false,
  "max_adults": 4,
  "preview_image": `image/preview.png`
};

const adaptedPlace = {
  "id": 1,
  "host": {
    "avatarUrl": `image/avatar.jpg`,
    "isPro": false
  },
  "isFavorite": false,
  "isPremium": false,
  "maxAdults": 4,
  "previewImage": `image/preview.png`
};

const initialComment = {
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
};

const adaptedComment = {
  "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "date": `2019-05-08T14:13:56.569Z`,
  "id": 1,
  "rating": 4,
  "user": {
    "avatarUrl": `img/1.png`,
    "id": 4,
    "isPro": false,
    "name": `Max`
  }
};

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const placesLoader = fetchPlaceList();

    apiMock
      .onGet(AppRoute.HOTELS)
      .reply(200, [initialPlace]);

    return placesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PLACES,
          payload: [adaptedPlace]
        });
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritePlacesLoader = fetchFavoritePlaceList();

    apiMock
      .onGet(AppRoute.FAVORITE)
      .reply(200, [initialPlace]);

    return favoritePlacesLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES_PLACES,
          payload: [adaptedPlace]
        });
      });
  });

  it(`Should make a correct API call to /login check authorization status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(AppRoute.LOGIN)
      .reply(200, {
        "email": `test@mail.ru`,
        "password": `11111`
      });

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.AUTHORIZATION_INFO,
          payload: {
            "email": `test@mail.ru`,
            "password": `11111`
          }
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const user = {email: `test@mail.ru`, password: `11111`};
    const loginLoader = logIn(user);

    apiMock
      .onPost(AppRoute.LOGIN)
      .reply(200, {
        "email": `test@mail.ru`,
        "password": `11111`
      });

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.AUTHORIZATION_INFO,
          payload: {
            "email": `test@mail.ru`,
            "password": `11111`
          }
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN,
        });
      });
  });

  it(`Should make a correct API call to /logout`, () => {
    const mockApi = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logOut();

    mockApi.onGet(AppRoute.LOGOUT).reply(200);

    return logoutLoader(dispatch, () => {}, api)
      .then(()=> {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.AUTHORIZATION_INFO,
          payload: {},
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.NO_AUTH,
        });
      });
  });

  it(`Should make a correct API call to /hotels/:id, /hotel/:id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const propertyLoader = fetchProperty(id);

    apiMock
      .onGet(`${AppRoute.HOTELS}/${id}`)
      .reply(200, initialPlace);

    apiMock
      .onGet(`${AppRoute.HOTELS}/${id}/nearby`)
      .reply(200, [initialPlace]);


    return propertyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROPERTY_DATA,
          payload: adaptedPlace
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_PROPERTY_NEARBY,
          payload: [adaptedPlace]
        });
      });
  });

  it(`Should make a correct API call to /comments/:id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const reviewsLoader = fetchPropertyReviews(id);

    apiMock
      .onGet(`${AppRoute.COMMENTS}/${id}`)
      .reply(200, [initialComment]);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [adaptedComment]
        });
      });
  });

  it(`Should make a correct API call to /comments/:id by adding new comment`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const comment = {rating: 4, comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`};
    const submitterComments = sendPropertyReview(id, comment);

    apiMock
      .onPost(`${AppRoute.COMMENTS}/${id}`)
      .reply(200, [{
        "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "date": `2019-06-08T14:13:56.569Z`,
        "id": 1,
        "rating": 4,
        "user": {
          "avatar_url": `img/1.png`,
          "id": 4,
          "is_pro": false,
          "name": `Max`
        }
      }]);
    return submitterComments(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [
            {
              "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
              "date": `2019-06-08T14:13:56.569Z`,
              "id": 1,
              "rating": 4,
              "user": {
                "avatarUrl": `img/1.png`,
                "id": 4,
                "isPro": false,
                "name": `Max`
              }
            }]
        });
      });
  });

  it(`Should make a correct API call to /favorite/:id/:status by toggle offer as favorite`, () => {
    const mockApi = new MockAdapter(api);
    const dispatch = jest.fn();
    const changeFavoriteLoader = changeFavorite({id: 1, status: 0});

    mockApi.onPost(`/favorite/1/0`).reply(200, adaptedPlace);

    return changeFavoriteLoader(dispatch, () => {}, api)
      .then(()=> {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_FAVORITE_PLACE,
          payload: expect.any(Object),
        });
      });
  });

});
