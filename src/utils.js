function randomX() {
  return parseInt(Math.random() * width);
}

function randomY() {
  return parseInt(Math.random() * height);
}

function randomColor() {
  return color(random(255), random(255), random(255))
}