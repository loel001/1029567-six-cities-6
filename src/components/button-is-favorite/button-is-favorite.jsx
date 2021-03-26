import React from 'react';
import PropTypes from 'prop-types';
import {AppRoute, AuthorizationStatus, ButtonTypes} from '../../common/const';
import {changeFavorite} from '../../store/api-actions';
import {useDispatch, useSelector} from 'react-redux';
import {redirectToRoute} from '../../store/action';

const ButtonIsFavorite = ({id, isFavorite, nameButton}) => {
  const dispatch = useDispatch();
  const {authorizationStatus} = useSelector((state) => state.USER);

  const cardFavoriteClickHandler = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    } else {
      dispatch(changeFavorite({
        id,
        status: Number(!isFavorite)
      }));
    }
  };

  const bookmarkClass = isFavorite ? ButtonTypes[nameButton].favorite : ``;
  const bookmarkText = isFavorite ? `In bookmarks` : `To bookmarks`;

  return (
    <button
      onClick={() => cardFavoriteClickHandler()}
      className={`${ButtonTypes[nameButton].noFavorite} ${bookmarkClass} button`}
      type="button"
    >
      <svg className={ButtonTypes[nameButton].icon} width={ButtonTypes[nameButton].width} height={ButtonTypes[nameButton].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{bookmarkText}</span>
    </button>
  );
};

ButtonIsFavorite.propTypes = {
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  nameButton: PropTypes.string.isRequired
};

export default ButtonIsFavorite;
