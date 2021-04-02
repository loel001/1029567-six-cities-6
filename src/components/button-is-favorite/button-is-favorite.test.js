import React from 'react';
import {render, screen} from "@testing-library/react";
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import ButtonIsFavorite from './button-is-favorite';
import userEvent from "@testing-library/user-event";

const mockStore = configureStore();

describe(`Test 'ButtonIsFavorite'`, () => {
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

  it(`Should call dispatch when user click on button`, () => {
    const fakeDispatch = jest.spyOn(redux, `useDispatch`).mockImplementation(() => jest.fn());

    render(
        <redux.Provider store={mockStore({USER: {authorizationStatus: `NO_AUTH`}})}>
          <ButtonIsFavorite id={1} isFavorite={false} nameButton={`PLACE`} />
        </redux.Provider>
    );


    userEvent.click(screen.getByTestId(`button`));
    expect(fakeDispatch).toBeCalled();
  });
});
