'use strict';

function main () {
  console.log("JS Running");
  var mainAudio;
  mainAudio = new Audio("COCO.m4a");
  document.body.appendChild(mainAudio);
  mainAudio.play();
}

window.addEventListener('load', main);