
/*
* wow a comment!
*/
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!!';

// single line comment

// adding an image changer
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-icon.png') {
    myImage.setAttribute ('src','images/duck.png');
  } else {
    myImage.setAttribute ('src', 'images/firefox-icon.png');
  }
}
