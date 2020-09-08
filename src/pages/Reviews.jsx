import React, { Component } from 'react';
import { fetchMovieReviews } from '../services/articles-api';

const getMovieId = props => props.match.params.id;

export default class Cast extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const id = getMovieId(this.props);
    fetchMovieReviews(id).then(data =>
      this.setState({ reviews: data.results }),
    );
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <h1>Reviews</h1>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>{review.content}</li>
          ))}
        </ul>
      </div>
    );
  }
}
