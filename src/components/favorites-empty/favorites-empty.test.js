import React from 'react';
import {render, screen} from "@testing-library/react";
import FavoritesEmpty from './favorites-empty';

it(`Render 'FavoritesEmpty'`, () => {
  render(
      <FavoritesEmpty />
  );

  expect(screen.getByTestId(`favorites-empty`)).toBeInTheDocument();
  expect(screen.getByText(`Nothing yet saved.`)).toBeInTheDocument();
});
