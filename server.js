const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const { getFilms, addFilm, removeFilm } = require('./server/films');

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Headers', 'content-type');
  res.set('Access-Control-Allow-Methods', 'DELETE');

  next();
});

app.get('/api/films', (req, res) => {
  res.json(getFilms())
});

app.post('/api/films', bodyParser.json(), (req, res) => {
  addFilm(req.body.title);
  const films = getFilms();

  res.json(films[films.length - 1]);
});

app.delete('/api/films/:filmId', (req, res) => {
  removeFilm(req.params.filmId);

  res.json({ status: 'success' });
});

app.use(express.static('build'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
