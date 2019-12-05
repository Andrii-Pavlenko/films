import React from 'react';
import './showInfo.scss';

export const ShowInfo = ({ actualFilm }) => {
  return (
    <div className="showInfo">
      <p>Film name: {actualFilm.title}</p>
      <p>Year: {actualFilm.year}</p>
      <p>Format: {actualFilm.format}</p>
      <p>Stars: {actualFilm.stars && actualFilm.stars.join(', ') + '.'}</p>
    </div>
  );
};
