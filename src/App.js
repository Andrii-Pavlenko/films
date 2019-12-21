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
    selectForFilter: 'title',
  };

  componentDidMount() {
    this.refreshFilms();
  }

  async refreshFilms() {
    const films = await getApi.getFilms();
    this.setState({ films });
  }

  addFilm = async (values) => {
    await getApi.addFilm(values);
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

  setSelectForFilter = (value) => {
    this.setState(prevState => ({
      ...prevState,
      selectForFilter: value,
    }))
  }

  setForFilter = (value) => {
    this.setState(prevState => ({
      ...prevState,
      forFilter: value.toLowerCase(),
    }))
  };

  filter = () => {
    let toState;

    let { films, selectForFilter, forFilter } = this.state;

    switch (selectForFilter) {
      case 'title':
        toState = films.filter(item => item.title.toLowerCase().includes(forFilter));
        break;
      case 'year':
        toState = films.filter(item => item.year.toLowerCase().includes(forFilter));
        break;
      case 'format':
        toState = films.filter(item => item.format.toLowerCase().includes(forFilter));
        break;
      case 'stars':
        toState = films.filter(item => item.stars.toLowerCase().includes(forFilter));
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
            setSelectForFilter={this.setSelectForFilter}
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
