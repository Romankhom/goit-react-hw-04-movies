import React, { Component } from 'react';
import Movie from '../components/Movie/Movie';
import { fetchMovieWithId } from '../services/articles-api';

const getIdFromProps = props => props.match.params.id;

export default class MovieId extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    fetchMovieWithId(id).then(movie => this.setState({ movie }));
  }

  render() {
    const { movie } = this.state;

    return (
      <div>
        <Movie {...movie} />
      </div>
    );
  }
}
