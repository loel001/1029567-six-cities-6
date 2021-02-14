import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import places from './mocks/places';
import reviews from './mocks/reviews';

ReactDOM.render(
    <App
      places={places}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
