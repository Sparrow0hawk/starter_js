/*
* loop through cat images
*
*/
"use strict";

const images = ['cat1.jpg',
  'cat2.jpg',
  'cat3.jpg',
  'cat4.jpg',
  'cat5.jpg']

let img = document.getElementById("catz");

function changeImage() {

  let ind = Math.floor( Math.random() * images.length );
  let selected = images[ ind ];

  img.src = 'assets/' + selected

  setTimeout(changeImage, 3000)
}

changeImage()
