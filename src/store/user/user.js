import {createReducer} from '@reduxjs/toolkit';
import {AuthorizationStatus} from "../../common/const";
import {requireAuthorization, authorizationInfo} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(authorizationInfo, (state, action) => {
    state.authorizationInfo = action.payload;
  });
});

export {user};
