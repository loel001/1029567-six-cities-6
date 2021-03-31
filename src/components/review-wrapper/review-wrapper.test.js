import React from 'react';
import {render, screen} from "@testing-library/react";
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import ReviewWrapper from './review-wrapper';
import thunk from "redux-thunk";
import {createAPI} from "../../services/api";

const api = createAPI(() => {});

const reviewTest = {
  USER: {
    authorizationStatus: `AUTH`,
    authorizationInfo: {
      email: `Oliver.conner@gmail.com`,
      password: `11111`
    }
  },
  DATA: {
    isReviewsLoaded: true,
    propertyReviews: [
      {
        "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "date": `2019-05-08T14:13:56.569Z`,
        "id": 1,
        "rating": 4,
        "user": {
          "avatarUrl": `img/1.png`,
          "id": 4,
          "isPro": false,
          "name": `Max`
        }
      },
      {
        "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "date": `2019-05-08T14:13:56.569Z`,
        "id": 2,
        "rating": 4,
        "user": {
          "avatarUrl": `img/1.png`,
          "id": 4,
          "isPro": false,
          "name": `Max`
        }
      }
    ]
  }
};

it(`Render 'ReviewWrapper'`, () => {
  const middleware = [thunk.withExtraArgument(api)];
  const mockStore = configureStore(middleware);

  render(
      <redux.Provider store={mockStore(reviewTest)}>
        <ReviewWrapper placeId={1} />
      </redux.Provider>
  );

  expect(screen.getByTestId(`property-reviews`)).toBeInTheDocument();

  expect(screen.getByText(`2`)).toBeInTheDocument();
});
