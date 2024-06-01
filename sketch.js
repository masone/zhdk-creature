let lastBlinkTime = 0;
const gridItems = 20
const randomColor = () => ["#000", "#FFF"][Math.floor(Math.random() * 2)]
const patterns = []
let creature

function setup() {
  createCanvas(400, 400);

  const positions = []

  const gridSize = width / gridItems;
  for(let cols = 0; cols < gridItems; cols += 1) {
    for(let rows = 0; rows < gridItems; rows += 1) {      
      const pattern = new Pattern(cols*gridSize, rows*gridSize, randomColor());
      
      positions.push([cols*gridSize, rows*gridSize])
      patterns.push(pattern)
    }
  }
  
  const position = Math.floor(random(0, positions.length))
  const coordinates = positions[position]
  creature = new Creature(coordinates[0], coordinates[1], gridSize, "#FFF");
}

function draw() {
  const currentTime = millis();
  const blinkInterval = random(5000, 10000);  

  background("#F3F3F3");  
  patterns.forEach(pattern => pattern.display())
  creature.display();

  if (currentTime - lastBlinkTime > blinkInterval) {
    lastBlinkTime = currentTime;
    blink()
  }
}

function blink() {
  const blinkDuration = random(50, 100);
  creature.visible = false
  setTimeout(() => {
    creature.visible = true    
  
    setTimeout(() => {
      creature.visible = false

      setTimeout(() => {
        creature.visible = true
      }, blinkDuration)
    }, blinkDuration)
  }, blinkDuration)
}

function mouseReleased() {
  window.location.reload()
}