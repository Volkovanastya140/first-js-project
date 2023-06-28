'use strick'

let numberOfFilms;

function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '')
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '')
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ''),
      b = prompt("На сколько оцените его?", '');

    if (a != null && b != null & a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  };
}
rememberMyFilms();


function writeYourGenres(){
  for(i = 1; i <= 3; i++){
    let genres = prompt(`Ваш любимый жанр  под номером ${i} ?`, '');

    if( genres != null && genres != ''){
      personalMovieDB.genres[i - 1] = genres
    }
  }

}

writeYourGenres();

function detectedPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Вы посмотрели мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы отличный зритель!");
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы посмотрели очень много фильмов');
  } else {
    console.log('Errorrrr');
  };
}

detectedPersonalLevel();



function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);
