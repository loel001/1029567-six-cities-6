import React from 'react';
import {render, screen} from "@testing-library/react";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import ButtonIsFavorite from './button-is-favorite';

const mockStore = configureStore();

it(`Render 'ButtonIsFavorite'`, () => {
  const history = createMemoryHistory();

  render(
      <redux.Provider store={mockStore({USER: {authorizationStatus: `NO_AUTH`}})}>
        <Router history={history}>
          <ButtonIsFavorite id={1} isFavorite={true} nameButton={`PLACE`} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByTestId(`button`)).toBeInTheDocument();
});
