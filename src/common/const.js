export const AVATAR_URL = `https://i.pravatar.cc/128`;

export const MAX_PROPERTY_IMAGES = 6;
export const MAX_NUMBER_STARS = 5;
export const MAX_NUMBER_PIN = 3;

export const PlaceSettings = {
  MAIN: {
    article: `cities__place-card`,
    image: {
      imageClass: `cities__image-wrapper`,
      width: 260,
      height: 200,
    },
    info: ``
  },
  NEAR: {
    article: `near-places__card`,
    image: {
      imageClass: `near-places__image-wrapper`,
      width: 260,
      height: 200,
    },
    info: ``
  },
  FAVORITES: {
    article: `favorites__card`,
    image: {
      imageClass: `favorites__image-wrapper`,
      width: 150,
      height: 110,
    },
    info: `favorites__card-info`
  }
};
