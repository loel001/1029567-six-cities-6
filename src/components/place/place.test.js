import React from 'react';
import {render, screen} from "@testing-library/react";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Place from './place';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore();
const history = createMemoryHistory();

const testPlace = {
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
};

describe(`Test 'Card'`, () => {
  it(`Render 'Place'`, () => {
    render(
        <redux.Provider store={mockStore({USER: {authorizationStatus: `NO_AUTH`}})}>
          <Router history={history}>
            <Place place={testPlace} placeName="MAIN" />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`place-card`)).toBeInTheDocument();
    expect(screen.getByTestId(`place-card-name`)).toBeInTheDocument();

    expect(screen.getByText(`Beautiful & luxurious studio at great location`)).toBeInTheDocument();
    expect(screen.getByText(`apartment`)).toBeInTheDocument();
  });

  it(`Should call dispatch when user hover on card`, () => {
    const fakeDispatch = jest.spyOn(redux, `useDispatch`).mockImplementation(() => jest.fn());

    render(
        <redux.Provider store={mockStore({USER: {authorizationStatus: `NO_AUTH`}})}>
          <Router history={history}>
            <Place place={testPlace} placeName="MAIN" />
          </Router>
        </redux.Provider>
    );

    userEvent.hover(screen.getByTestId(`place-card`));
    expect(fakeDispatch).toBeCalled();
  });
});
