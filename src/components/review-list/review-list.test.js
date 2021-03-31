import React from 'react';
import {render, screen} from '@testing-library/react';

import ReviewsList from './review-list';

const testReviewsList = [
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
    "comment": `The house is very good, very happy, hygienic and simple living conditions around it are also very good.`,
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
];

it(`Render 'ReviewList'`, () => {
  render(
      <ReviewsList reviews={testReviewsList} />
  );

  expect(screen.getByTestId(`reviews-list`)).toBeInTheDocument();

  for (const item of testReviewsList) {
    expect(screen.getByText(item.comment)).toBeInTheDocument();
  }
});
