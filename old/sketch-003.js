let walkers = []

function setup() {
  createCanvas(640, 480);
  angleMode(DEGREES);
  background(0);
}

function draw() {
  background(0, 20);
  for (const walker of walkers) {
    if (!walker.isOut()) {
      walker.draw()
      walker.update()
    }
  }
}

class Walker {
  constructor(x, y) {
    this.x = x
    this.y = y

    this.prevX = x
    this.prevY = y

    this.velX = random(-2, 2)
    this.velY = random(-2, 2)

    this.startColor = randomColor()
    this.endColor = randomColor()
  }
  
  draw () {
    let c = lerpColor(this.startColor, this.endColor, noise(this.x, this.y))
    stroke(c);
    line(this.prevX, this.prevY, this.x, this.y)
  }

  update() {
    this.velocity()
    this.move()
  }

  velocity() {
    let s = 5
    //this.velX += random(-s/2, s/2)
    //this.velY += random(-s/2, s/2)

    this.velX += map(noise(this.x * 0.05, this.y * 0.05), 0, 1, -1, 1);
    this.velY += map(noise(this.y * 0.05, this.x * 0.05), 0, 1, -1, 1);
  }

  move() {
    this.prevX = this.x
    this.prevY = this.y
    this.x += this.velX
    this.y += this.velY
  }

  isOut () {
    return(this.x < 0 || this.x > width || this.y < 0 || this.y > height);
  }
}

function mouseClicked() {
  let n = 1000
  for (let i = 0; i < n; i++) {
    let walker = new Walker(mouseX, mouseY);
    walkers.push(walker) 
  }  
  // prevent default
  return false;
}