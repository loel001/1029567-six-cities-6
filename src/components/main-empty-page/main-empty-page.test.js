import React from 'react';
import {render, screen} from "@testing-library/react";
import MainEmptyPage from './main-empty-page';


it(`Render 'MainEmptyPage'`, () => {

  render(
      <MainEmptyPage activeCity={`Paris`}/>
  );

  expect(screen.getByTestId(`cities-no-places`)).toBeInTheDocument();
  expect(screen.getByText(`No places to stay available`)).toBeInTheDocument();
  expect(screen.getByText(`We could not find any property available at the moment in Paris`)).toBeInTheDocument();
});
