var audio1 = new Audio('sound1.mp3');
var audio2 = new Audio('sound2.mp3');
var audio3 = new Audio('sound3.mp3');

var audio4 = new Audio('sound4.mp3');
var audio
var audios = [audio1, audio2, audio3, audio4]
// Get a reference to the HTML element where the IP address will be displayed
const ipElement = document.getElementById('ip-address');

// Make a request to the ipify API to get the visitor's IP address
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    // Set the text content of the element to the visitor's IP address
    ipElement.textContent = data.ip;
  })
  .catch(error => console.error(error));

function myFunction(){
  var random = (Math.floor(Math.random() * 4));
  var audio = audios[random];
  audio.play();
}