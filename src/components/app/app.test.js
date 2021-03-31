import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app';

const mockStore = configureStore();

const testData = {
  USER: {
    authorizationStatus: `AUTH`,
    authorizationInfo: {}
  },
  PLACES: {
    activeCity: `Paris`,
    activeSorting: `Popular`,
    activePlaceId: null,
  },
  DATA: {
    places: [
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Paris`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 1,
        "images": [`img/1.png`, `img/2.png`],
        "isFavorite": false,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Paris`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 2,
        "images": [`img/1.png`, `img/2.png`],
        "isFavorite": false,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Paris`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 3,
        "images": [`img/1.png`, `img/2.png`],
        "isFavorite": false,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      }
    ],
    isDataLoaded: true,
    favoritesPlaces: [
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Paris`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 1,
        "images": [`img/1.png`, `img/2.png`],
        "isFavorite": true,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Paris`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 2,
        "images": [`img/1.png`, `img/2.png`],
        "isFavorite": true,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
    ],
    isDataFavoriteLoaded: true,
    isReviewsLoaded: false,
    propertyReviews: [
      {
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
      },
      {
        "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "date": `2019-05-08T14:13:56.569Z`,
        "id": 2,
        "rating": 4,
        "user": {
          "avatarUrl": `img/1.png`,
          "id": 4,
          "isPro": false,
          "name": `Max`
        }
      }
    ],
    currentProperty: {
      "bedrooms": 3,
      "city": {
        "location": {
          "latitude": 52.370216,
          "longitude": 4.895168,
          "zoom": 10
        },
        "name": `Paris`
      },
      "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      "host": {
        "avatarUrl": `img/1.png`,
        "id": 3,
        "isPro": true,
        "name": `Angelina`
      },
      "id": 1,
      "images": [`img/1.png`, `img/2.png`],
      "isFavorite": false,
      "isPremium": false,
      "location": {
        "latitude": 52.35514938496378,
        "longitude": 4.673877537499948,
        "zoom": 8
      },
      "maxAdults": 4,
      "previewImage": `img/1.png`,
      "price": 120,
      "rating": 4.8,
      "title": `Beautiful & luxurious studio at great location`,
      "type": `apartment`
    },
    nearPlaces: [
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Paris`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 1,
        "images": [`img/1.png`, `img/2.png`],
        "isFavorite": false,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Paris`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 2,
        "images": [`img/1.png`, `img/2.png`],
        "isFavorite": false,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      },
      {
        "bedrooms": 3,
        "city": {
          "location": {
            "latitude": 52.370216,
            "longitude": 4.895168,
            "zoom": 10
          },
          "name": `Paris`
        },
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 3,
        "images": [`img/1.png`, `img/2.png`],
        "isFavorite": false,
        "isPremium": false,
        "location": {
          "latitude": 52.35514938496378,
          "longitude": 4.673877537499948,
          "zoom": 8
        },
        "maxAdults": 4,
        "previewImage": `img/1.png`,
        "price": 120,
        "rating": 4.8,
        "title": `Beautiful & luxurious studio at great location`,
        "type": `apartment`
      }
    ],
    isInfoLoaded: false,
    isNearbyLoaded: false,
  }
};

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'Main' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore(testData)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-nav`)).toBeInTheDocument();

    expect(screen.getByTestId(`main`)).toBeInTheDocument();
    expect(screen.getByTestId(`cities`)).toBeInTheDocument();
    expect(screen.getByText(`Places`)).toBeInTheDocument();

    expect(screen.getByTestId(`map`)).toBeInTheDocument();
  });

  it(`Render 'Favorites' when user navigate to '/favorites' url`, () => {
    const history = createMemoryHistory();
    history.push(`/favorites`);

    render(
        <redux.Provider store={mockStore(testData)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-nav`)).toBeInTheDocument();

    expect(screen.getByTestId(`favorites`)).toBeInTheDocument();
    expect(screen.getByText(`Saved listing`)).toBeInTheDocument();

    expect(screen.getByTestId(`favorites-list`)).toBeInTheDocument();
  });

  it(`Render 'Login' when user navigate to '/login' url`, () => {
    const history = createMemoryHistory();
    history.push(`/login`);

    render(
        <redux.Provider store={mockStore({USER: {authorizationStatus: `NO_AUTH`}})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-nav`)).toBeInTheDocument();

    expect(screen.getByTestId(`login-title`)).toBeInTheDocument();
    expect(screen.getByTestId(`login-submit`)).toBeInTheDocument();
    expect(screen.getByLabelText(`E-mail`)).toBeInTheDocument();
    expect(screen.getByLabelText(`Password`)).toBeInTheDocument();
  });

  it(`Render 'Property' when user navigate to '/offer/:id' url`, () => {
    const history = createMemoryHistory();
    history.push(`/offer/:1`);

    render(
        <redux.Provider store={mockStore(testData)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-nav`)).toBeInTheDocument();

    expect(screen.getByTestId(`property-name`)).toBeInTheDocument();
    expect(screen.getByTestId(`property-features`)).toBeInTheDocument();
    expect(screen.getByTestId(`property-host`)).toBeInTheDocument();
    expect(screen.getByText(`Bedrooms`)).toBeInTheDocument();
  });

  it(`Render 'Page404' when user navigate to non-existent route`, () => {
    const history = createMemoryHistory();
    history.push(`/non-existent-route`);

    render(
        <redux.Provider store={mockStore({USER: {authorizationStatus: `NO_AUTH`, authorizationInfo: {}}})}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`404`)).toBeInTheDocument();
    expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
    expect(screen.getByText(`Вернуться на главную`)).toBeInTheDocument();
  });
});
