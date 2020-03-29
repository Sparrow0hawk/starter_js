/*
* clock javascript
* code adapted from https://codepen.io/afarrar/pen/JRaEjP
*/
"use strict";

function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  let time = h + ':' + m + ':' + s + ' ' + session;

  document.getElementById("MyClockDisplay").innerText = time;

  document.getElementById("MyClockDisplay").textContent = time;

  // recursively call the function every second
  setTimeout(showTime, 1000)
}

showTime()
