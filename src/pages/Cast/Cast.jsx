import React, { Component } from 'react';
import { fetchMovieCast } from '../../services/articles-api';
import styles from './cast.module.css';

const linkPoster = `https://image.tmdb.org/t/p/w300`;
const getMovieId = props => props.match.params.id;

export default class Cast extends Component {
  state = {
    casts: [],
  };

  componentDidMount() {
    const id = getMovieId(this.props);
    fetchMovieCast(id).then(data => this.setState({ casts: data.cast }));
  }

  render() {
    const { casts } = this.state;
    return (
      <div>
        <h1>CAST</h1>
        <ul className={styles.list}>
          {casts.map(cast => (
            <li key={cast.id}>
              <img src={linkPoster + cast.profile_path} alt="photoActor" />
              <p>{cast.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
