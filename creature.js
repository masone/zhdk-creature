class Creature {
  constructor(topLeftX, topLeftY, gridSize, color) {
    this.color = color;
    this.eyeSize = random(2, gridSize/4)
    this.gridSize = gridSize
    this.visible = true
    this.topLeftX = topLeftX
    this.topLeftY = topLeftY 
  }

  display() {
    if (!this.visible) {
      return;
    }

    const distance = this.eyeSize * 1.5
    console.log({eyeSize: this.eyeSize, distance, gridSize: this.gridSize})

    push();
    noStroke();
    blendMode(DIFFERENCE);
    fill(this.color)
    
    ellipse(this.topLeftX + this.gridSize / 2 - distance + this.eyeSize / 2, this.topLeftY + this.gridSize / 2, this.eyeSize);
    ellipse(this.topLeftX + this.gridSize / 2 + distance - this.eyeSize / 2, this.topLeftY + this.gridSize / 2, this.eyeSize);

    pop();
  }

}