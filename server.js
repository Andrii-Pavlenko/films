const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 80;

const { getFilms, addFilm, removeFilm } = require('./server/films');

app.use(cors());

app.get('/api/films', (req, res) => {
  res.json(getFilms())
});

app.post('/api/films', bodyParser.json(), (req, res) => {
  addFilm(req.body.title, req.body.year, req.body.format, req.body.stars, req.body.image);
  const films = getFilms();

  res.json(films[films.length - 1]);
});

app.delete('/api/films/:filmId', (req, res) => {
  removeFilm(req.params.filmId);

  res.json({ status: 'success' });
});

app.get('/', (req, res) => {
  res.json('hello')
});

app.use(express.static('build'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
