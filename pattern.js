const randomize = number => random() < 0.5 ? number + 5 : number - 5

class Pattern {
  constructor(x, y, color) {
    this.color = color;
    this.size = random(30, 70)
    this.topLeftX = randomize(x)
    this.topLeftY = randomize(y)
    this.topRightX = randomize(x + this.size)
    this.topRightY = randomize(y)
    this.bottomRightX = randomize(x + this.size)
    this.bottomRightY = randomize(y + this.size)
    this.bottomLeftX = randomize(x)
    this.bottomLeftY = randomize(y + this.size)
  }

  display() {  
    push();  
    noStroke();
    fill(this.color)
    // rect(x, y, this.size, this.size);
    
    beginShape();
    vertex(this.topLeftX, this.topLeftY);
    vertex(this.topRightX, this.topRightY);
    vertex(this.bottomRightX, this.bottomRightY);
    vertex(this.bottomLeftX, this.bottomLeftY);
    
    endShape(CLOSE);

    pop();
  }

}