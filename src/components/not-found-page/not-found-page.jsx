import React from 'react';
import {Link} from 'react-router-dom';
import Header from "../header/header";
import {AppRoute} from "../../common/const";

const NotFoundPage = () => {

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <div className="cities">
          <div className="cities__places-container container">
            <section data-testid="404">
              <h1>404. Page not found</h1>
              <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};


export default NotFoundPage;
