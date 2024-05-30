class Kreatur {
  constructor(x, y, s) {
    this.position = {
      x: x,
      y: y
    };
    this.size = s;
  }

  display() {
    push();
    noFill();
    ellipse(this.position.x, this.position.y, this.size);
    pop();
  }

  move() {
    console.log('kreatur moved!');
  }
}