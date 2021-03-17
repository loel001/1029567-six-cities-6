import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../common/const';
import {useHistory} from 'react-router-dom';
import {logOut} from '../../store/api-actions';

const Header = (props) => {
  const {authorizationStatus, authorizationInfo, handelUserLogout} = props;
  const history = useHistory();

  const handelPushLoginScreen = (evt) => {
    evt.preventDefault();
    history.push(AppRoute.LOGIN);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.MAIN}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
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

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }),
  handelUserLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  authorizationInfo: state.authorizationInfo,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handelUserLogout: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
