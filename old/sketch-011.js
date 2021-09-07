let angleOffset

function setup() {
  createCanvas(400, 700)
  background(0)
  angleMode(DEGREES)
  stroke(0)
  angleOffset = random() * 360
  // for (let i = 0; i < 500; i++) {
  //   let radius = random() * 100 + 50
  //   let rotation = random() * 360
  //   let angle = random() * 270 + angleOffset

  //   let x = cos(angle) * radius
  //   let y = sin(angle) * radius
  //   push()
  //   translate(width / 2 + x, height / 2 + y)
  //   rotate(rotation)
  //   triangle(-10, -5, 0, -20, 10, -5);
  //   pop()
  // }
}

function draw() {
  background(0, 20)
  let radius = random() * 100 + 50
  let rotation = random() * 360
  let angle = random() * 270 + angleOffset

  let x = cos(angle) * radius
  let y = sin(angle) * radius
  push()
  translate(width / 2 + x, height / 2 + y)
  rotate(rotation)
  scale(1 + noise(x, y) - 0.5)
  triangle(-10, -5, 0, -20, 10, -5);
  pop()
}