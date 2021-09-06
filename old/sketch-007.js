let boxHeight = 5

function setup() {
  createCanvas(500, 500)
  generate()
}

function draw() {

}

function mouseClicked() {
  generate()
}

function generate() {
  background(255)
  stroke(0)
  fill(250)
  const c1 = color(255)
  const c2 = randomColor()
  for (let i = 0; i < height; i += boxHeight) {
    let boxWidth = random() * width
    let offset = random() * (width - boxWidth)

    fill(lerpColor(c1, c2, i/height))

    rect(offset, i, boxWidth, boxHeight)
  }
}

function randomColor() {
  return color(
    random() * 255,
    random() * 255,
    random() * 255
  )
}