import {changeCity, changeSorting, getActivePlace} from '../action';
import {places} from './places';

describe(`Reducers work correctly`, () => {
  it(`Reducer with no additional parameters should return initial state`, () => {
    expect(places(undefined, {}))
      .toEqual({
        activeCity: `Paris`,
        activeSorting: `Popular`,
        activePlaceId: null,
      });
  });

  it(`Reducer should change city`, () => {
    const state = {
      activeCity: `Paris`
    };

    expect(places(state, changeCity(`Cologne`)))
      .toEqual({
        activeCity: `Cologne`
      });
  });

  it(`Reducer should incrementing active place`, () => {
    const state = {
      activePlaceId: null
    };

    expect(places(state, getActivePlace(1)))
      .toEqual({
        activePlaceId: 1
      });
  });

  it(`Reducer should change sort`, () => {
    const state = {
      activeSorting: `Popular`
    };

    expect(places(state, changeSorting(`Price: low to high`)))
      .toEqual({
        activeSorting: `Price: low to high`
      });
  });
});
