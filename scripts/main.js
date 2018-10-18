var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/20180828-124126.jpg') {
      myImage.setAttribute ('src','images/20180907-142535.jpg');
    } else {
      myImage.setAttribute ('src','images/20180828-124126.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Phil & ' + myName + "... always";
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Phil & ' + storedName + "... always";
  }
  myButton.onclick = function() {
    setUserName();
  }