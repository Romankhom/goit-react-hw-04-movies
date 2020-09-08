import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

const ativeStyle = {
  color: 'red',
};

const Nav = () => (
  <div className={styles.nav}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavLink to="/" exact activeStyle={ativeStyle}>
          Home
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/movies" activeStyle={ativeStyle}>
          Movies
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Nav;
