let kreatur;

function setup() {
  createCanvas(400, 400);
  kreatur = new Kreatur(width/2, height/2, 50);
}

function draw() {
  background(220);
  kreatur.display();
}
