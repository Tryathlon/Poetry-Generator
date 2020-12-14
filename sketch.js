let phrase;
let options;
let rnn;
let state = 0;
let menubackgroundimg;
let buttonlen = 300;
let buttonwid = 75;
let poemout = [];
let poemdisp ='';
let adject = [];
let numb = 0;
let seedtxt = '';

function preload() {

  menubackgroundimg = loadImage('quill.jpg');

}

function setup() {
  createCanvas(800, 600);
  console.clear();
  adjectives();
  numb= floor(random(0, adject.length));
  seedtxt = adject[numb];
}


function draw() {

  image(menubackgroundimg, 0, 0, width, height);
  background(220, 110);


  if (state === 0) {
    menu();
  }

  if (state === 1) {
    poem();
  }

}