import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACES_COUNT: 312,
  NAMES: [`Beautiful luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`]
};

ReactDOM.render(
    <App
      names={Setting.NAMES}
      placesCount={Setting.PLACES_COUNT}
    />,
    document.querySelector(`#root`)
);
