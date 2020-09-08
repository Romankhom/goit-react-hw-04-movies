import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFound';
import Nav from '../Navigation/Nav';
import styles from './app.module.css';

const AsyncHome = lazy(() =>
  import('../../pages/Home' /* webpackChunkName: "home-page" */),
);

const AsyncMovies = lazy(() =>
  import('../../pages/Movies/Movies' /* webpackChunkName: "movies-page" */),
);

const AsyncMovieId = lazy(() =>
  import('../../pages/MovieId' /* webpackChunkName: "movieId-page" */),
);

const App = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Nav />
        <Switch>
          <Route path="/" exact component={AsyncHome} />
          <Route path="/movies/:id" component={AsyncMovieId} />
          <Route path="/movies" component={AsyncMovies} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
