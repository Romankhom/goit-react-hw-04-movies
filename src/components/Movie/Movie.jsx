/* eslint-disable camelcase */
import React, { Component, lazy, Suspense } from 'react';
import T from 'prop-types';
import { NavLink, Route, withRouter, Switch } from 'react-router-dom';
import styles from './movie.module.css';

const AsyncCast = lazy(() =>
  import('../../pages/Cast/Cast' /* webpackChunkName: "cast-page" */),
);

const AsyncReviews = lazy(() =>
  import('../../pages/Reviews' /* webpackChunkName: "reviews-page" */),
);

const linkPoster = `https://image.tmdb.org/t/p/w300`;

const selected = {
  color: 'red',
};

class Movie extends Component {
  static propTypes = {
    history: T.shape({
      push: T.func,
      goBack: T.func.isRequired,
      replace: T.func.isRequired,
    }).isRequired,
    location: T.shape({
      state: T.shape({}),
      pathname: T.string,
    }).isRequired,
    match: T.shape({
      params: T.shape({
        id: T.string,
      }),
      url: T.string,
      path: T.string,
    }).isRequired,
    title: T.string,
    poster_path: T.string,
    popularity: T.number,
    // eslint-disable-next-line react/require-default-props
    genres: T.arrayOf(
      T.shape({
        id: T.number,
        name: T.string,
      }),
    ),
    overview: T.string,
  };

  static defaultProps = {
    title: '',
    poster_path: '',
    popularity: null,
    overview: '',
  };

  handleGoback = () => {
    const { history, location } = this.props;

    if (location.state) {
      history.goBack();
      return;
    }

    history.push({
      pathname: '/movies',
    });
  };

  render() {
    const {
      title,
      // eslint-disable-next-line camelcase
      poster_path,
      popularity,
      genres,
      overview,
      match,
      location,
    } = this.props;

    return (
      <>
        <article>
          <button
            className={styles.btn}
            type="button"
            onClick={this.handleGoback}
          >
            Go Back
          </button>
          <h2>{title} </h2>
          {poster_path ? (
            <img src={linkPoster + poster_path} alt={title} />
          ) : (
            <></>
          )}
          <p>
            <b>Popularity: {popularity}</b>
          </p>
          <p>Overview: {overview}</p>
          <ul>
            {genres ? (
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)
            ) : (
              <></>
            )}
          </ul>
          <div>
            <p>Additional information</p>
            <ul>
              <li className={styles.item}>
                <NavLink
                  activeStyle={selected}
                  to={{
                    pathname: `${match.url}/cast`,
                    state: { from: location },
                  }}
                  replace
                >
                  Cast
                </NavLink>
              </li>
              <li className={styles.item}>
                <NavLink
                  activeStyle={selected}
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: { from: location },
                  }}
                  replace
                >
                  Revievs
                </NavLink>
              </li>
            </ul>
          </div>
        </article>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route path="/movies/:id/cast" exact component={AsyncCast} />
            <Route path="/movies/:id/reviews" exact component={AsyncReviews} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default withRouter(Movie);
