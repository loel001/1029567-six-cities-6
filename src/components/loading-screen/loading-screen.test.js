import React from 'react';
import {render, screen} from "@testing-library/react";
import LoadingScreen from './loading-screen';

it(`Render 'FavoritesEmpty'`, () => {
  render(
      <LoadingScreen />
  );

  expect(screen.getByTestId(`loading`)).toBeInTheDocument();
  expect(screen.getByText(`Loading ...`)).toBeInTheDocument();
});
