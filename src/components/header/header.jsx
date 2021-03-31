import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../common/const';
import {useHistory} from 'react-router-dom';
import {logOut} from '../../store/api-actions';

const Header = () => {
  const dispatch = useDispatch();
  const {authorizationStatus, authorizationInfo} = useSelector((state) => state.USER);
  const history = useHistory();

  const handelPushLoginScreen = (evt) => {
    evt.preventDefault();
    history.push(AppRoute.LOGIN);
  };

  const handelUserLogout = () => {
    dispatch(logOut());
  };

  return (
    <header className="header" data-testid="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav" data-testid="header-nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <>
                    <Link className="header__logo-link header__logo-link--active" to={AppRoute.FAVORITES}>
                      <span className="header__user-name user__name">{authorizationInfo.email}</span>
                    </Link>
                    <button onClick={handelUserLogout}>Log Out</button>
                  </>
                  : <span onClick={handelPushLoginScreen} className="header__login">Sign in</span>
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
