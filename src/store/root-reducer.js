import {combineReducers} from 'redux';
import {places} from './places/places';
import {data} from './data/data';
import {user} from './user/user';


export const NameSpace = {
  PLACES: `PLACES`,
  DATA: `DATA`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.PLACES]: places,
  [NameSpace.DATA]: data,
  [NameSpace.USER]: user
});
