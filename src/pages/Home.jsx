import React, { Component } from 'react';
import { fetchMoviesTrending } from '../services/articles-api';
import MoviesList from '../components/MoviesList/MoviesList';

export default class Home extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetchMoviesTrending().then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    return (
      <div>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </div>
    );
  }
}
