'use strict';
let pictures = document.querySelectorAll('#slider .images img');
let i = 0;

let buttPrev = document.querySelector('#slider .buttons .prev');
let buttNext = document.querySelector('#slider .buttons .next');
let buttSlide = document.querySelector('#slider .buttons .slide');
//let buttStop = document.querySelector('#slider .buttons .stopslide');
//let setIntervalId = setInterval(preview, 3000);


buttNext.onclick = preview;
buttSlide.onclick = slider;
buttPrev.onclick = previous;
//buttStop.onclick = stopSlider;





