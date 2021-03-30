import {requireAuthorization, authorizationInfo} from '../action';
import {user} from './user';
import {AuthorizationStatus} from "../../common/const";

describe(`Reducers work correctly`, () => {
  it(`Reducer with no additional parameters should return initial state`, () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationInfo: {},
      });
  });

  it(`Reducer should change authorization status`, () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH
    };

    expect(user(state, requireAuthorization(AuthorizationStatus.AUTH)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH
      });
  });

  it(`Reducer should change authorization info`, () => {
    const state = {
      authorizationInfo: {
        email: ``
      }
    };

    expect(user(state, authorizationInfo({email: `Oliver.conner@gmail.com`})))
      .toEqual({
        authorizationInfo: {
          email: `Oliver.conner@gmail.com`
        }
      });
  });
});
