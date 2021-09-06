let drops = []
let nDrops = 20

function setup() {
  createCanvas(500, 500)
  for (let i = 0; i < nDrops; i++) {
    drops.push(new Drop())
  }
}

function draw() {
  background(0, 5)
  for (const drop of drops) {
    drop.update()
    drop.draw()
  }
}

class Drop {
  constructor() {
    this.x = random() * width
    this.y = 0
    this.pX = this.x
    this.pY = this.y
    this.ySpeed = 5
  }

  update() {
    this.pX = this.x
    this.pY = this.y

    this.y += this.ySpeed
    this.x += noise(this.x, frameCount) * 10 - 5
    
    if (this.x < 0) this.x = width
    if (this.x > width) this.x = 0
    if (this.y > height) this.y = 0
  }

  draw() {
    stroke(255)
    line(this.pX, this.pY, this.x, this.y)
  }
}