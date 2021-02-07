import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import NotFoundPage from "../not-found-page/not-found-page";
import Login from "../login/login";
import Favorites from "../favorites/favorites";
import Property from "../property/property";

const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage
            names={props.names}
            placesCount={props.placesCount}
          />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route exact path="/offer/:id?">
          <Property />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  names: PropTypes.array.isRequired,
  placesCount: PropTypes.number.isRequired,
};

export default App;
