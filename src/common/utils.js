import {MAX_NUMBER_STARS} from './const';
import {SortingTypes} from "./const";

export const formatString = (string) => {
  const strings = string.split(` `);
  return strings.map((it) => it[0].toUpperCase() + it.slice(1)).join(` `);
};

export const getNumberStarts = (rating) => {
  return `${rating / MAX_NUMBER_STARS * 100}%`;
};

export const getPlacesCity = (places, selectedCity) => {
  return places.filter((place) => place.city.name === selectedCity);
};

export const sortPlaces = (places, sortingType) => {
  switch (sortingType) {
    case SortingTypes.PRICE_LOW:
      return [...places].sort((a, b) => (a.price - b.price));
    case SortingTypes.PRICE_HIGH:
      return [...places].sort((a, b) => (b.price - a.price));
    case SortingTypes.RATING:
      return [...places].sort((a, b) => (b.rating - a.rating));
    default:
      return [...places];
  }
};
