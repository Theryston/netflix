import React from 'react';
import './styles.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="Logo" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://occ-0-4395-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeIhXirDuWtlduqTCPvY1TxBQec1XobQfrM_y_A-__jvH-kbjNxvbxDbq0l96lv3eIXZQk8oJP8rAc5creFEIHbd7hDd.png?r=c72" alt="Usuário" />
        </a>
      </div>
    </header>
  )
}