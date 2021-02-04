import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

const App = (props) => {

  return (
    <MainPage
      names={props.names}
      placesCount={props.placesCount}
    />
  );
};

App.propTypes = {
  names: PropTypes.array.isRequired,
  placesCount: PropTypes.number.isRequired,
};

export default App;
