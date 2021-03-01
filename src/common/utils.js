import {MAX_NUMBER_STARS} from './const';

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
