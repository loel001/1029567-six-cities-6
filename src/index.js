import React from 'react';
import ReactDOM from 'react-dom';
import {Router as BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './store/root-reducer';
import {createAPI} from "./services/api";
import {Provider} from 'react-redux';
import {AuthorizationStatus} from "./common/const";
import {checkAuth} from './store/api-actions';
import {redirect} from "./store/middlewares/redirect";
import {requireAuthorization} from './store/action';
import browserHistory from "./browser-history";

export const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});


store.dispatch(checkAuth()).then(() => {
  ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <App />
        </BrowserRouter>
      </Provider>,
      document.querySelector(`#root`)
  );
});
