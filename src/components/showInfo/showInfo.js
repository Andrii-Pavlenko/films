import React from 'react';
import './showInfo.scss';

export const ShowInfo = ({ actualFilm }) => {
  return (
    <div className="show-info">
      <p>Film name: <span className="show-info__text"> {actualFilm.title}</span></p>
      <p>Year: <span className="show-info__text"> {actualFilm.year}</span></p>
      <p>Format: <span className="show-info__text"> {actualFilm.format}</span></p>
      <p>Stars: <span className="show-info__text"> {actualFilm.stars && actualFilm.stars.join(', ') + '.'}</span></p>
    </div>
  );
};
