import React from 'react';
import {render, screen} from "@testing-library/react";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import Header from './header';

const mockStore = configureStore();

describe(`Test 'Header'`, () => {
  it(`Render 'Header' with no authorization`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore({USER: {authorizationStatus: `NO_AUTH`}})}>
          <Router history={history}>
            <Header />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-nav`)).toBeInTheDocument();

    expect(screen.getByText(`Sign in`)).toBeInTheDocument();
  });

  it(`Render 'Header' with authorization`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore({USER: {authorizationStatus: `AUTH`, authorizationInfo: {email: `test@mail.ru`}}})}>
          <Router history={history}>
            <Header />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByTestId(`header`)).toBeInTheDocument();
    expect(screen.getByTestId(`header-nav`)).toBeInTheDocument();

    expect(screen.getByText(`test@mail.ru`)).toBeInTheDocument();
    expect(screen.getByText(`Log Out`)).toBeInTheDocument();
  });
});
