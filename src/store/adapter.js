export const adaptPlaceToClient = (place) => {
  const adaptedPlace = Object.assign(
      {},
      place,
      {
        host: {
          ...place.host,
          avatarUrl: place.host.avatar_url,
          isPro: place.host.is_pro
        },
        isFavorite: place.is_favorite,
        isPremium: place.is_premium,
        maxAdults: place.max_adults,
        previewImage: place.preview_image
      }
  );

  delete adaptedPlace.host.avatar_url;
  delete adaptedPlace.host.is_pro;
  delete adaptedPlace.is_favorite;
  delete adaptedPlace.is_premium;
  delete adaptedPlace.max_adults;
  delete adaptedPlace.preview_image;


  return adaptedPlace;
};

export const adaptReviewToClient = (data) => {
  const adaptedReview = {
    ...data,
    user: {
      ...data.user,
      avatarUrl: data.user.avatar_url,
      isPro: data.user.is_pro
    }
  };

  delete adaptedReview.user.avatar_url;
  delete adaptedReview.user.is_pro;

  return adaptedReview;
};
