import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import './AddFilmsForm.scss';

export const AddFilmForm = ({ addFilm }) => {

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      return;
    }

    addFilm(title, year);
    setTitle('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        <div className="ui label">
          Title:
        </div>
        <Input
          type="text"
          value={title}
          onChange={event => setTitle(event.target.value)}
          className="form__input"
          placeholder="Set film title!"
        />
      </label>

      <label>
        <div className="ui label">
          Year:
        </div>
        <Input
          type="text"
          value={year}
          onChange={event => setYear(event.target.value)}
          className="form__input"
          placeholder="Set movie release year!"
        />
      </label>

      <label>
        <div className="ui label">
          Format:
        </div>
        <Input
          type="text"
          value={year}
          onChange={event => setYear(event.target.value)}
          className="form__input"
          placeholder="Set movie format!"
        />
      </label>

      <label>
        <div className="ui label">
          Actors:
        </div>
        <Input
          type="text"
          value={year}
          onChange={event => setYear(event.target.value)}
          className="form__input"
          placeholder="Set the lead actors!"
        />
      </label>

      <label>
        <div className="ui label">
          Image:
        </div>
        <Input
          type="text"
          value={year}
          onChange={event => setYear(event.target.value)}
          className="form__input"
          placeholder="Set background image!"
        />
      </label>

      <Button type="submit" className="ui inverted black basic button form__button">Add</Button>
    </form>
  )
};
