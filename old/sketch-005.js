
function setup() {
  createCanvas(640, 480);
  angleMode(DEGREES);
  background(0);
  stroke(255);
  noFill()
}

function draw() {
  background(0, 10)
  stroke(color(0, 50, 100))
  for (let i = 0; i < width; i+=1) {
    let y = height / 2
    let s1 = sin(i + frameCount + 270) * height / 4
    let s2 = cos(i + -frameCount - 90) * height / 4
    let s3 = sin(i* 0.5) * 20
    point(i, y + s1 + s2)
  }

  stroke(color(0, 150, 200))
  let s4 = sin(frameCount * 2) * 70
  circle(width / 2, height / 2, 100 + s4)
  circle(width / 2, height / 2, 100 - s4)
  circle(width / 2, height / 2, 100 - s4 / 2)
  circle(width / 2, height / 2, 100 + s4 / 2)

  let s5 = sin(frameCount * 2 + 90) * 70
  circle(width / 4, height / 2, 100 + s5)
  circle(width / 4, height / 2, 100 - s5)
  circle(width / 4, height / 2, 100 - s5 / 2)
  circle(width / 4, height / 2, 100 + s5 / 2)

  let s6 = sin(frameCount * 2 - 90) * 70
  circle(width / 4 * 3, height / 2, 100 + s6)
  circle(width / 4 * 3, height / 2, 100 - s6)
  circle(width / 4 * 3, height / 2, 100 - s6 / 2)
  circle(width / 4 * 3, height / 2, 100 + s6 / 2)
}

function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}