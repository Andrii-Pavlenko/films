import React, { useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import './AddFilmsForm.scss';

export const AddFilmForm = ({ addFilm }) => {

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [format, setFormat] = useState('');
  const [stars, setStars] = useState([]);
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      return;
    }

    addFilm(title, year, format, stars, image);
    setTitle('');
    setYear('');
    setFormat('');
    setStars([]);
    setImage('');
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
          value={format}
          onChange={event => setFormat(event.target.value)}
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

          value={stars}
          onChange={event => setStars(event.target.value.split(/, |\. |; |,|\.|;+/g))}
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
          value={image}
          onChange={event => setImage(event.target.value)}
          className="form__input"
          placeholder="Set background image!"
        />
      </label>

      <Button type="submit" className="ui inverted black basic button form__button">Add</Button>
    </form>
  )
};
