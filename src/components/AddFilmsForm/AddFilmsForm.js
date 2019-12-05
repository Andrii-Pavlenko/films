import React, { useState } from 'react';
import './AddFilmsForm.scss';

export const AddFilmForm = ({ addFilm }) => {

  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      return;
    }

    addFilm(title);
    setTitle('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  )
};
