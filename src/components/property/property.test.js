import React from 'react';
import {render, screen} from "@testing-library/react";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import App from "../app/app";
import thunk from "redux-thunk";
import {createAPI} from "../../services/api";

const api = createAPI(() => {});

const testProperty = {
  PLACES: {
    activeCity: `Paris`,
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
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.`,
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
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.`,
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
        "title": `The house among olive`,
        "type": `house`
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
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 3,
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
        "title": `Waterfront with extraordinary view`,
        "type": `room`
      }
    ],
    isDataLoaded: true,
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
      "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.`,
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
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 4,
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
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.`,
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
        "title": `The house among olive`,
        "type": `house`
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
        "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Paris.`,
        "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
        "host": {
          "avatarUrl": `img/1.png`,
          "id": 3,
          "isPro": true,
          "name": `Angelina`
        },
        "id": 3,
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
        "title": `Waterfront with extraordinary view`,
        "type": `room`
      }
    ],
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
        "comment": `The house is very good, very happy, hygienic and simple living conditions around it are also very good.`,
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
  },
  USER: {
    authorizationStatus: `AUTH`,
    authorizationInfo: {
      email: `Oliver.conner@gmail.com`,
      password: `1111`
    }
  }
};

it(`Render 'Property'`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  const history = createMemoryHistory();
  history.push(`/offer/1`);
  const middleware = [thunk.withExtraArgument(api)];
  const mockStore = configureStore(middleware);

  render(
      <redux.Provider store={mockStore(testProperty)}>
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
});
