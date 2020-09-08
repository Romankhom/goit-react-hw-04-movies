import React, { Component } from 'react';
import T from 'prop-types';
import queryString from 'query-string';
import { fetchMovieSearch } from '../../services/articles-api';
import MoviesList from '../../components/MoviesList/MoviesList';
import styles from './movies.module.css';

const getQueryFromLocation = location =>
  queryString.parse(location.search).query;

class Movies extends Component {
  static propTypes = {
    history: T.shape({
      push: T.func,
    }).isRequired,
    location: T.shape({
      search: T.string,
      pathname: T.string,
    }).isRequired,
  };

  state = {
    searchQuery: '',
    moviesSearch: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const qsQuery = getQueryFromLocation(location);
    if (qsQuery) {
      this.setState({ searchQuery: qsQuery });
      this.search(qsQuery);
    }
  }

  search = query => {
    fetchMovieSearch(query).then(res =>
      this.setState({ moviesSearch: res.results }),
    );
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { searchQuery } = this.state;
    const { location } = this.props;

    this.search(searchQuery);
    this.props.history.push({
      pathname: location.pathname,
      search: `query=${searchQuery}`,
    });
    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { moviesSearch, searchQuery } = this.state;
    console.log(moviesSearch);

    return (
      <div>
        <form className={styles.form}>
          <input
            onChange={this.handleChange}
            type="text"
            value={searchQuery}
            placeholder="Search movie"
          />
          <button onClick={this.handleSubmit} type="submit">
            <span>Search</span>
          </button>
        </form>
        {moviesSearch.length > 0 && <MoviesList movies={moviesSearch} />}
      </div>
    );
  }
}

export default Movies;
