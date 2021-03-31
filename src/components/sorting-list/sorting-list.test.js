import React from 'react';
import {render, screen} from "@testing-library/react";
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import SortingList from './sorting-list';

const mockStore = configureStore();

it(`Render 'SortingList'`, () => {
  render(
      <redux.Provider store={mockStore({PLACES: {activeSorting: `Popular`}})}>
        <SortingList />
      </redux.Provider>
  );

  expect(screen.getByText(`Sort by`)).toBeInTheDocument();
  expect(screen.getByTestId(`places-sorting`)).toBeInTheDocument();
  expect(screen.getByText(`Popular`)).toBeInTheDocument();
});
