import React from 'react';
import { FilmList } from './components/FilmList';
import { AddFilmForm } from './components/AddFilmsForm';
import './App.scss';

import * as getApi from './api/getApi';
import { Route, Switch} from "react-router-dom";
import {ShowInfo} from "./components/showInfo";
import {Header} from "./components/Header";


class App extends React.PureComponent {
  state = {
    films: [],
    forFilter: '',
    actualFilm: '',
    filterToShow: null,
  };

  componentDidMount() {
    this.refreshFilms();
  }

  async refreshFilms() {
    const films = await getApi.getFilms();
    this.setState({ films });
  }

  addFilm = async (title, year, format, stars, image) => {
    await getApi.addFilm(title, year, format, stars, image);
    this.refreshFilms();
  };

  removeFilm = async (filmId) => {
    await getApi.removeFilm(filmId);
    this.refreshFilms();
  };

  sortFilms = () => {
    this.setState(prevState => ({
      ...prevState,
      films: [...prevState.films].sort((a, b) => a.title.localeCompare(b.title))
    }))
  };

  setForFilter = (value) => {
    this.setState(prevState => ({
      ...prevState,
      forFilter: value.toLowerCase(),
    }))
  };

  filter = (name) => {
    let toState;

    switch (name) {
      case 'title':
        toState = this.state.films.filter(item => item.title.toLowerCase().includes(this.state.forFilter));
        break;
      default:
        return this.state
    }
    this.setState(prevState => ({
      ...prevState,
      filterToShow: toState,
    }));
  };

  getFilmToShow = (film) => {
    this.setState(prevState => ({
      ...prevState,
      actualFilm: film,
    }))
  };

  resetList = () => {
    this.setState(prevState => ({
      ...prevState,
      filterToShow: '',
    }))
  };

  render() {
    const { films, actualFilm, filterToShow } = this.state;

    return (
      <Switch>
        <div className="App">
          <Header
            filter={this.filter}
            setForFilter={this.setForFilter}
            sortFilms={this.sortFilms}
            resetList={this.resetList}
          />

          <Route exact path="/add">
            <AddFilmForm addFilm={this.addFilm} />
          </Route>
          <Route exact path="/">
            <FilmList
              filterToShow={filterToShow}
              films={films}
              removeFilm={this.removeFilm}
              getFilmToShow={this.getFilmToShow}
              actualFilm={actualFilm}
            />
          </Route>
          <Route exact path="/info">
            <ShowInfo actualFilm={actualFilm} />
          </Route>
        </div>
      </Switch>
    );
  }
}

export default App;
