class Kreatur {
  constructor(x, y, s) {
    this.position = {
      x: x,
      y: y
    };
    this.size = s;
  }

  display() {
    ellipse(this.position.x, this.position.y, this.size);
  }

  move() {
    console.log('kreatur moved!');
  }
}