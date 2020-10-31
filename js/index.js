"use strict";

let numberOfFilm ;
let persMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    numberOfFilm = +prompt("сколько посмотрел фильмов?", 10);
    while ( numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm) ) {
        numberOfFilm = +prompt("сколько посмотрел фильмов?", 10);
    }
    persMovieDB.count = numberOfFilm;
}

function writeNameFilm () { 
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
}

function  detectUserFilmlevel () {
    if (persMovieDB.count < 11){
        console.log(`${persMovieDB.count} is small`);
    } else if (persMovieDB.count > 10 && persMovieDB.count<31){
        console.log(`${persMovieDB.count} is norm`);
    } else {
        console.log(`${persMovieDB.count} is cool`);
    }
}
function showMyDB() {
    if (!persMovieDB.privat) {console.log(persMovieDB);}
}

function writeYourGenres() {
    for (let i=1; i < 4; i++) {
        let a = prompt (`Write your lovest genres № ${i}`, 'comedy');
        persMovieDB.genres[i-1] = a;
    }
}
start();
writeNameFilm();
detectUserFilmlevel();
writeYourGenres();
showMyDB();
