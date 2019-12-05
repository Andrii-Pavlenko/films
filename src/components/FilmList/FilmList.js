import React from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './FilmList.scss';
import { ShowInfo } from '../showInfo';

export class FilmList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      actualFilm: '',
    }
  }

  getFilmToShow = (film) => {
    this.setState(prevState => ({
      ...prevState,
      actualFilm: film,
    }))
  };

  render() {
    const { actualFilm } = this.state;
    const { films, removeFilm } = this.props;

    return (
      <div>
        <ul className="form__list">
          {films.map(film => (
            <li key={film.id} className="form__film overlay blue">
              <label title={film.id} className="form__title">
                {film.title}
              </label>
              <div className="form__button">
                <Button onClick={() => removeFilm(film.id)} className="form__button-delete delete" pure icon><Icon name="remove" /></Button>
                <Button onClick={() => this.getFilmToShow(film)} className="form__button-info info">show info</Button>
              </div>
            </li>
          ))}
        </ul>
        <ShowInfo actualFilm={actualFilm} />
      </div>
    );
  }
}
