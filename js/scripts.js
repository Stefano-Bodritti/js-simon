// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// funzioni
// funzione che genera n numeri random diversi
function numeroRandom(min, max, n) {
  var arrayRandom = [];
  for (var i = 0; i < n; i++) {
    do {
      var numeroCasuale = Math.floor((Math.random() * (max - min + 1)) + min);
    } while ( arrayRandom.includes(numeroCasuale) );
    arrayRandom.push(numeroCasuale);
  }
  return arrayRandom;
}

$(function () {

var minimo = 1;
var massimo = 100;
var numeriGenerati = 5;

// 1. genero 5 numeri random e li stampo a schermo
var arrayCasuale = numeroRandom(minimo, massimo, numeriGenerati);
alert(arrayCasuale);


});
