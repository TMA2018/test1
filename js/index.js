"use strict";

let numberOfFilm = +prompt("сколько посмотрел фильмов?", 10);

let persMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let a = prompt("Name one of last films?","name_film");
let b = +prompt("how is film?","10");
let c = prompt("Name one of last films?","name_film");
let d = +prompt("how is film?","10");
persMovieDB.movies[a] = b;
persMovieDB.movies[c] = d;
console.log(persMovieDB);
//2alert(persMovieDB.count);
/*console.log(pers["name"]);
//console.log(confirm("it's true?"));
let b = +prompt("it's true", 6);
alert(typeof(b));*/
