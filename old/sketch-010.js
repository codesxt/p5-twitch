let h
let s
let b

function setup() {
  createCanvas(500, 800)
  background(255)
  colorMode(HSB)

  h = random() * 255
  s = random() * 100
  b = random() * 100
  c = color(
    h,
    s,
    b
  )

  let hSpeed = 10
  let sSpeed = 2
  let bSpeed = 2
  for (let i = 0; i < height; i++) {
    h += noise(i * 0.1, i * 0.1) * hSpeed - hSpeed / 2
    s += noise(i * 0.1, i * 0.1) * sSpeed - sSpeed / 2
    // b += noise(i * 0.1, i * 0.1) * bSpeed - bSpeed / 2
    stroke(color(h, s, b))
    line(0, i, width, i)
  }
}

function draw() {
}