'use strict';

const uuid = require('uuid/v1');

let films = [
  {
    id: '1',
    title: 'Blazing Saddles',
    year: '1974',
    format: 'VHS',
    stars: ['Mel Brooks', 'Clevon Little', 'Harvey Korman', 'Gene Wilder', 'Slim Pickens', 'Madeline Kahn'],
  },
  {
    id: '2',
    title: 'Casablanca',
    year: '1942',
    format: 'DVD',
    stars: ['Humphrey Bogart', 'Ingrid Bergman', 'Claude Rains', 'Peter Lorre'],
  },
  {
    id: '3',
    title: 'Charade',
    year: '1953',
    format: 'DVD',
    stars: ['Audrey Hepburn', 'Cary Grant', 'Walter Matthau', 'James Coburn', 'George Kennedy'],
  },
  {
    id: '4',
    title: 'Cool Hand Luke',
    year: '1967',
    format: 'VHS',
    stars: ['Paul Newman', 'George Kennedy', 'Strother Martin'],
  },
  {
    id: '5',
    title: 'Butch Cassidy and the Sundance Kid',
    year: '1969',
    format: 'VHS',
    stars: ['Paul Newman', 'Robert Redford', 'Katherine Ross'],
  },
  {
    id: '6',
    title: 'The Sting',
    year: '1973',
    format: 'DVD',
    stars: ['Robert Redford', 'Paul Newman', 'Robert Shaw', 'Charles Durning'],
  },
  {
    id: '7',
    title: 'The Muppet Movie',
    year: '1979',
    format: 'DVD',
    stars: ['Jim Henson', 'Frank Oz', 'Dave Geolz', 'Mel Brooks', 'James Coburn', 'Charles Durning', 'Austin Pendleton'],
  },
  {
    id: '8',
    title: 'Get Shorty',
    year: '1995',
    format: 'DVD',
    stars: ['John Travolta', 'Danny DeVito', 'Renne Russo', 'Gene Hackman', 'Dennis Farina'],
  },
  {
    id: '9',
    title: 'My Cousin Vinny',
    year: '1992',
    format: 'DVD',
    stars: ['Joe Pesci', 'Marrisa Tomei', 'Fred Gwynne', 'Austin Pendleton', 'Lane Smith', 'Ralph Macchio'],
  },
  {
    id: '10',
    title: 'Gladiator',
    year: '2000',
    format: 'Blu-Ray',
    stars: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielson'],
  },
  {
    id: '11',
    title: 'Star Wars',
    year: '1977',
    format: 'Blu-Ray',
    stars: ['Harrison Ford', 'Mark Hamill', 'Carrie Fisher', 'Alec Guinness', 'James Earl Jones'],
  },
  {
    id: '12',
    title: 'Raiders of the Lost Ark',
    year: '1981',
    format: 'DVD',
    stars: ['Harrison Ford', 'Karen Allen'],
  },
  {
    id: '13',
    title: 'Serenity',
    year: '2005',
    format: 'Blu-Ray',
    stars: ['Nathan Fillion',' Alan Tudyk', 'Adam Baldwin', 'Ron Glass', 'Jewel Staite', 'Gina Torres', 'Morena Baccarin', 'Sean Maher', 'Summer Glau', 'Chiwetel Ejiofor'],
  },
  {
    id: '14',
    title: 'Hooisers',
    year: '1986',
    format: 'VHS',
    stars: ['Gene Hackman', 'Barbara Hershey', 'Dennis Hopper'],
  },
  {
    id: '15',
    title: 'WarGames',
    year: '1983',
    format: 'VHS',
    stars: ['Matthew Broderick', 'Ally Sheedy', 'Dabney Coleman', 'John Wood', 'Barry Corbin'],
  },
  {
    id: '16',
    title: 'Spaceballs',
    year: '1987',
    format: 'DVD',
    stars: ['Bill Pullman', 'John Candy', 'Mel Brooks', 'Rick Moranis', 'Daphne Zuniga', 'Joan Rivers'],
  },
  {
    id: '17',
    title: 'Young Frankenstein',
    year: '1974',
    format: 'VHS',
    stars: ['Gene Wilder', 'Kenneth Mars', 'Terri Garr', 'Gene Hackman', 'Peter Boyle'],
  },
  {
    id: '18',
    title: 'Real Genius',
    year: '1985',
    format: 'VHS',
    stars: ['Val Kilmer', 'Gabe Jarret', 'Michelle Meyrink', 'William Atherton'],
  },
  {
    id: '19',
    title: 'Top Gun',
    year: '1986',
    format: 'DVD',
    stars: ['Tom Cruise', 'Kelly McGillis', 'Val Kilmer', 'Anthony Edwards', 'Tom Skerritt'],
  },
  {
    id: '20',
    title: 'MASH',
    year: '1970',
    format: 'DVD',
    stars: ['Donald Sutherland', 'Elliot Gould', 'Tom Skerritt', 'Sally Kellerman', 'Robert Duvall'],
  },
  {
    id: '21',
    title: 'The Russians Are Coming',
    year: '1966',
    format: 'VHS',
    stars: ['Carl Reiner', 'Eva Marie Saint', 'Alan Arkin', 'Brian Keith'],
  },
  {
    id: '22',
    title: 'Jaws',
    year: '1975',
    format: 'DVD',
    stars: ['Roy Scheider', 'Robert Shaw', 'Richard Dreyfuss', 'Lorraine Gary'],
  },
  {
    id: '23',
    title: 'Harvey',
    year: '1950',
    format: 'DVD',
    stars: ['James Stewart', 'Josephine Hull', 'Peggy Dow', 'Charles Drake'],
  },
  {
    id: '24',
    title: 'Knocked Up',
    year: '2007',
    format: 'Blu-Ray',
    stars: ['Seth Rogen', 'Katherine Heigl', 'Paul Rudd', 'Leslie Mann'],
  }
];

const getFilms = () => {
  return films;
};

const addFilm = (title, year, format, stars, image) => {
  const newFilm = {
    id: uuid(),
    title: title,
    year: year,
    format: format,
    stars: stars,
    image: image,
  };

  films = [...films, newFilm];
};

const removeFilm = (filmId) => {
  films = films.filter(film => film.id !== filmId)
};

module.exports = {
  getFilms,
  addFilm,
  removeFilm
};
