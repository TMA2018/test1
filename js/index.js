'use strict';

let numberOfFilm = +prompt("сколько посмотрел фильмов?", 10);

let persMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
/*let a = prompt("Name one of last films?","name_film");
let b = +prompt("how is film?","10");
let c = prompt("Name one of last films?","name_film");
let d = +prompt("how is film?","10");*/
let a, b;
while (true) {
    
    a = prompt("Name one of last films?","name_film");
    if (a === null) {break;}
    else if (a == '') {
        alert ('name is empty, write real name'); 
        continue; }
    else if (a.length > 50) { 
        alert ('name is long, write real name'); 
        continue; 
    }
    b = +prompt("how is film?","10");
    persMovieDB.movies[a] = b;
}

if (persMovieDB.count < 11){
    console.log(`${persMovieDB.count} is small`);
} else if (persMovieDB.count > 10 && persMovieDB.count<31){
    console.log(`${persMovieDB.count} is norm`);
} else {
    console.log(`${persMovieDB.count} is cool`);
}
console.log(persMovieDB);
