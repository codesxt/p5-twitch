let isPaused = false
let threshold = 20
let radius = 225
let repulsors = []

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  background(0);
  stroke(255)
  fill(0)
  strokeWeight(1)
  for (let i = 0; i < int(random() * 4) + 2; i++) {
    repulsors.push(Math.random() * 359)
  }

  stroke(225)
}

function draw() {
  if (!isPaused) {
    const p1 = random() * 359
    const p2 = random() * 359

    for (const r of repulsors) {
      if (abs(p1 - r) < threshold) return
      if (abs(p2 - r) < threshold) return
    }

    const center = createVector(width/2, height/2)

    const v1 = createVector(
      center.x + cos(p1) * radius,
      center.y + sin(p1) * radius
    )
    const v2 = createVector(
      center.x + cos(p2) * radius,
      center.y + sin(p2) * radius
    )    

    line(v1.x, v1.y, v2.x, v2.y)

    fill(0, 0)
    stroke(255)
    circle(center.x, center.y, radius * 2 + sin(frameCount * 2) * 5)
    stroke(0)
    circle(center.x, center.y, radius * 2 + cos(frameCount * 2) * 5)
    stroke(255)
  }
}

function mouseClicked() {
  isPaused = !isPaused
}