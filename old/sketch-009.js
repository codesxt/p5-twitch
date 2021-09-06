let things = []

function setup() {
  createCanvas(500, 500)
  angleMode(DEGREES)
  background(0)
  for (let i = 0; i < 5; i++) {
    things.push(new Thing())
  }
}

function draw() {
  background(0, 5)

  for (const thing of things) {
    thing.update()
    thing.draw()
  }
}

class Thing {
  constructor() {
    this.vertices = []
    this.radius = 100 + random() * 100
    this.noiseIntensity = 15
    this.offsets = []
    for (let i = 0; i < 360; i+= 1) {
      let v = createVector(
        width / 2 + cos(i) * this.radius,
        height / 2 + sin(i) * this.radius
      )
      this.vertices.push(v)      
      this.offsets.push(
        createVector(0, 0)
      )
    }
  }

  draw() {
    beginShape()
    fill(0, 20)
    stroke(255)
    for (const [i, v] of Object.entries(this.vertices)) {
      vertex(
        v.x + this.offsets[i].x,
        v.y + this.offsets[i].y,
      )
    }
    endShape(CLOSE)
  }

  update() {
    for (const [i, v] of Object.entries(this.vertices)) {
      let zOff = frameCount * 0.1
      let n = this.offsets[i]
      n.x = map(noise(v.x, v.y, zOff), 0, 1, -this.noiseIntensity, this.noiseIntensity)
      n.y = map(noise(v.x, v.y, zOff), 0, 1, -this.noiseIntensity, this.noiseIntensity)
      // v.x = noise(
      //   (v.x),
      //   (v.y),
      //   zOff
      // ) * this.noiseIntensity - this.noiseIntensity / 2
      // v.y = noise(
      //   (v.x),
      //   (v.y),
      //   zOff
      // ) * this.noiseIntensity - this.noiseIntensity / 2
    }
  }
}

function mouseClicked() {
  things = []
  for (let i = 0; i < 5; i++) {
    things.push(new Thing())
  }
}