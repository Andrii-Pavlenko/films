import React from 'react';
import './showInfo.scss';
import background from '../../film.jpg';

export const ShowInfo = ({ actualFilm }) => {
  return (
    <div className="show-info">
      <img alt={actualFilm.title} src={actualFilm.image || background} className="show-info__image"/>
      <div className="show-info__text">
        <p>Film name: <span className="show-info__text--paragraph"> {actualFilm.title}</span></p>
        <p>Year: <span className="show-info__text--paragraph"> {actualFilm.year}</span></p>
        <p>Format: <span className="show-info__text--paragraph"> {actualFilm.format}</span></p>
        <p>Stars: <span className="show-info__text--paragraph"> {actualFilm.stars && actualFilm.stars.join(', ') + '.'}</span></p>
      </div>        
    </div>
  );
};
