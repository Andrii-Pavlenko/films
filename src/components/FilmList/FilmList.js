import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import {NavLink, Switch} from "react-router-dom";
import './FilmList.scss';
import background from '../../film.jpg';

export const FilmList = ({ films, removeFilm, getFilmToShow, filterToShow }) => {
  
  const sectionStyle = (item) => {

    let style = {
      backgroundImage: `url(${item || background})`,
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      height: "200px",
    }

    return style;
  };

  return (
    <Switch>
      <div className="list">
        <ul className="list__list">
          {(!filterToShow ? films : filterToShow).map(film => (
            <li key={film.id} className="list__film overlay blue" style={sectionStyle(film.image)}>
              <label title={film.id} className="list__title">
                {film.title}
              </label>
              <div className="list__button">
                <Button
                  onClick={() => removeFilm(film.id)}
                  className="list__button-delete delete"
                  style={{backgroundColor: 'transparent'}}
                >
                  <Icon name="trash" />
                </Button>
                <NavLink to="/info">
                  <Button
                    onClick={() => getFilmToShow(film)}
                    className="form__button-info info"
                    style={{backgroundColor: 'transparent'}}
                  >
                    <Icon name="info circle" />
                  </Button>
                </NavLink>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </Switch>
  );
}
