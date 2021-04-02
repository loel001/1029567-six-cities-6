import React from 'react';
import {render, screen} from "@testing-library/react";
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import SortingList from './sorting-list';
import userEvent from '@testing-library/user-event';

const mockStore = configureStore();

describe(`Test 'Sort'`, () => {
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

  it(`Should call dispatch when user click on sort`, () => {
    const fakeDispatch = jest.spyOn(redux, `useDispatch`);

    render(
        <redux.Provider store={mockStore({PLACES: {activeSorting: ``}})}>
          <SortingList />
        </redux.Provider>
    );

    userEvent.click(screen.getByTestId(`places-sorting-type`));
    expect(screen.getByTestId(`places-options`)).toHaveClass(`places__options--opened`);

    userEvent.click(screen.getByText(`Popular`));
    expect(fakeDispatch).toBeCalled();
  });
});
