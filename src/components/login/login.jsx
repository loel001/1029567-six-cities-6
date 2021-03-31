import React, {useRef} from 'react';
import Header from "../header/header";
import {logIn} from '../../store/api-actions';
import {useDispatch} from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();

  const handelSubmit = (evt) => {
    evt.preventDefault();

    dispatch(logIn({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }));
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title" data-testid="login-title">Sign in</h1>
            <form className="login__form form" action="" method="post" onSubmit={handelSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="input-email">E-mail</label>
                <input id="input-email" className="login__input form__input" type="email" name="email" placeholder="Email" required="" ref={loginRef} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden" htmlFor="input-password">Password</label>
                <input id="input-password" className="login__input form__input" type="password" name="password" placeholder="Password" required="" ref={passwordRef} />
              </div>
              <button className="login__submit form__submit button" type="submit" data-testid="login-submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;
