import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {placePropTypes} from '../../common/prop-types';

import {getNumberStarts} from '../../common/utils';
import {PlaceSettings} from '../../common/const';

const Place = (props) => {

  const {handleMouseEnter, handleMouseLeave, isActivePlace, place, placeName} = props;

  const {
    id,
    isFavorite,
    isPremium,
    previewImage,
    price,
    rating,
    title,
    type
  } = place;

  const renderIsPremium = () => {
    return (
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
    );
  };

  return (
    <article className={`${PlaceSettings[placeName].article} place-card ${isActivePlace ? `place-card--active` : ``}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isPremium ? renderIsPremium() : null}
      <div className={`${PlaceSettings[placeName].image.imageClass} place-card__image-wrapper`}>
        <Link to={`/offer/` + id}>
          <img className="place-card__image" src={previewImage} width={PlaceSettings[placeName].image.width} height={PlaceSettings[placeName].image.height} alt="Place image"/>
        </Link>
      </div>
      <div className={`${PlaceSettings[placeName].info} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active ` : ``}button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: getNumberStarts(rating),
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/` + id}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Place.propTypes = {
  place: placePropTypes,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  isActivePlace: PropTypes.bool.isRequired,
  placeName: PropTypes.string.isRequired
};

export default Place;
