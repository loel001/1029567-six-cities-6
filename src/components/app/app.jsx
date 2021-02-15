import React from 'react';
import {placesPropTypes, reviewsPropTypes} from '../../common/prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import NotFoundPage from '../not-found-page/not-found-page';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';

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
  reviews: reviewsPropTypes,
  places: placesPropTypes
};

export default App;
