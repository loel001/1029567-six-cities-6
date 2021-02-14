import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import NotFoundPage from "../not-found-page/not-found-page";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Property from "../property/property";

const App = (props) => {
  const {places, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            places={places}
          />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id?">
          <Property
            places={places}
            reviews={reviews}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  })).isRequired,
  places: PropTypes.arrayOf(PropTypes.shape({
    bedrooms: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    location: PropTypes.objectOf(PropTypes.number).isRequired,
    maxAdults: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
