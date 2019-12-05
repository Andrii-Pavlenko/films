import React from 'react';
import { FilmList } from './components/FilmList';
import { AddFilmForm } from './components/AddFilmsForm';
import './App.scss';

import * as getApi from './api/getApi';

class App extends React.PureComponent {
  state = {
    films: [],
    forFilter: '',
  };

  componentDidMount() {
    this.refreshFilms();
  }

  async refreshFilms() {
    const films = await getApi.getFilms();
    this.setState({ films });
  }

  addFilm = async (title) => {
    await getApi.addFilm(title);
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
      films: toState,
    }));
  };

  render() {
    const { films } = this.state;

    return (
      <div className="App">
        <h1>home</h1>
        <AddFilmForm
          addFilm={this.addFilm}
        />
        <button type="button" onClick={() => this.sortFilms()}>Sort</button>
        <input type="text" onChange={(e) => this.setForFilter(e.target.value)}/>
        <button type="button" onClick={() => this.filter('title')}>Filter By Title</button>
        <FilmList
          films={films}
          removeFilm={this.removeFilm}
        />
      </div>
    );
  }
}

export default App;
