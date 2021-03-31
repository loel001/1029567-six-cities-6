import React from 'react';
import {render, screen} from "@testing-library/react";
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import CitiesList from './cities-list';
import {CIIES} from '../../common/const';

const mockStore = configureStore();

it(`Render 'CitiesList'`, () => {
  render(
      <redux.Provider store={mockStore({PLACES: {activeCity: `Paris`}})}>
        <CitiesList />
      </redux.Provider>
  );

  for (const item of CIIES) {
    expect(screen.getByText(item)).toBeInTheDocument();
  }
});
