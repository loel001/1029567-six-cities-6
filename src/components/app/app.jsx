import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import NotFoundPage from '../not-found-page/not-found-page';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from "../../common/const";

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}
        render={() => <MainPage />}
      >
      </Route >
      <Route exact path={AppRoute.LOGIN}
        render={() => <Login />}
      >
      </Route>
      <PrivateRoute exact
        path={AppRoute.FAVORITES}
        render={() => <Favorites />}
      >
      </PrivateRoute>
      <Route exact
        path={AppRoute.OFFER}
        render={() => <Property />}
      >
      </Route>
      <Route exact path={AppRoute.ERROR}
        render={() => <NotFoundPage />}
      >
      </Route>
      <Route
        render={() => <NotFoundPage />}
      >
      </Route>
    </Switch>
  );
};

export default App;
