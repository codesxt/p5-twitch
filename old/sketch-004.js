
function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);
  background(0);
  stroke(255);
  
}

function draw() {
  background(0, 20)
  for (let i = 0; i < width; i+=1) {
    let y = height / 2
    let s1 = sin(i + frameCount) * 100
    let s2 = sin(i + -frameCount) * 100
    point(i, y + s1 + s2)
  }

  for (let i = 0; i < width; i+=5) {
    let y = height / 3
    let s1 = sin(i + frameCount + 180) * 100
    let s2 = sin(i + -frameCount) * 100
    point(i, y + s1 + s2)
  }

  for (let i = 0; i < width; i+=5) {
    let y = height / 3 * 2
    let s1 = sin(i + frameCount + 180) * 100
    let s2 = sin(i + -frameCount) * 100
    point(i, y - (s1 + s2))
  }
}

function mousePressed() {
  let fs = fullscreen();
  fullscreen(!fs);
}