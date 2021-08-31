let walkers = []

function setup() {
  createCanvas(640, 480);
  angleMode(DEGREES);
  background(0);
}

function draw() {
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
    this.velX = random(-2, 2)
    this.velY = random(-2, 2)
    this.startColor = color(random()*255, random()*255, random()*255)
    //this.endColor = color(130, 20, 200)
    this.endColor = color(random()*255, random()*255, random()*255)

    this.offsetX = random(0, 100)
    this.offsetY = random(0, 100)
  }
  
  draw () {
    let c = lerpColor(this.startColor, this.endColor, noise(this.x, this.y))
    stroke(c);
    // point(this.x, this.y);
  }

  update() {
    let s = 30
    let pX = noise((this.x + this.offsetX) * 0.005, (this.y + this.offsetX) * 0.005, millis())
    let pY = noise((this.x + this.offsetY) * 0.005, (this.y + this.offsetY) * 0.005, millis())

    this.velX = map(pX, 0, 1, -s/2, s/2)
    this.velY = map(pY, 0, 1, -s/2, s/2)

    //this.velX = random(-s/2, s/2)
    //this.velY = random(-s/2, s/2)
    this.move()
  }

  move() {
    let oldX = this.x
    let oldY = this.y
    this.x += this.velX
    this.y += this.velY
    line(oldX, oldY, this.x, this.y)
  }

  isOut () {
    return(this.x < 0 || this.x > width || this.y < 0 || this.y > height);
  }
}

function mouseClicked() {
  let n = 5
  for (let i = 0; i < n; i++) {
    let walker = new Walker(mouseX, mouseY);
    walkers.push(walker) 
  }  
  // prevent default
  return false;
}