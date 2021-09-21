function setup() {
  createCanvas(600, 320)
  background(0)
  colorMode(HSB)
  angleMode(DEGREES)
  noStroke()
  frameRate(90)
  let hue = random(360)
  let saturation = random(50, 100)
  let brightness = random(40, 100)
  let range = 30
  let size = 40
  for (let i = 0; i < width; i+=size) {
    for (let j = 0; j < height; j+=size) {
      let c = color(
        random(hue - range, hue + range),
        saturation,
        brightness
      )
      fill(c)
      square(i, j, size)
    }    
  }
}

function draw() {
  let x = random(width)
  let y = random(height)
  let c = get(x, y)

  let theta = random(360)
  let length = 10
  let xi = x + cos(theta)*length
  let yi = y + sin(theta)*length

  colorMode(RGB)
  stroke(c)
  strokeWeight(8)
  line(x, y, xi, yi)
}