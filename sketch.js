const client = new tmi.Client({
	channels: [ 'EseMismoBruno' ]
})

client.connect()

client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
  const result = parseCommand(message)
  if (result) {
    const {
      command,
      arguments
    } = result
    console.log(command, arguments)
    if (command == '!circle') {
      const x = randomX()
      const y = randomY()

      const c = color(Math.random() * 255, Math.random() * 255, Math.random() * 255)
      fill(c)

      // Aser la dibujasion
      circle(x, y, 20)
      text(`${tags['display-name']}`, x + 15, y)
      console.log(randomX())
    }
    if (command == '!fondo_base' && arguments.length == 3) {
      const r = arguments[0]
      const g = arguments[1]
      const b = arguments[2]
      fondo_base = color(r, g, b)
    }
    if (command == '!fondo_objetivo' && arguments.length == 3) {
      const r = arguments[0]
      const g = arguments[1]
      const b = arguments[2]
      fondo_objetivo = color(r, g, b)
    }
    if (command == '!n' && arguments.length == 1) {
      n = Math.min(arguments[0], 100)
    }
    if (command == '!o' && arguments.length == 1) {
      for (const agent of agents) {    
        agent.updateOrientation(arguments[0])
      }
    }
  }
})

function parseCommand(message) {
  const words = message.split(' ')
  if (words.length > 0) {
    if (words[0].startsWith('!')) {
      const command = words[0]
      const arguments = words.slice(1)
      return {
        command,
        arguments
      }
    } else {
      console.log('Buu... No era un comando :(')
      return null
    }
    return null
  }
}

function drawColumns(frameCount) {
  const space = width / n
  for (let i = 0; i < width + 50; i = i + space) {
    stroke(fondo_objetivo)
    // translate(-i, - height / 2)
    // rotate(frameCount % 360)
    line(i, 0, i, height)
    // translate(+i, + height / 2)
    // resetMatrix()    
  }
}

function randomX() {
  return parseInt(Math.random() * width);
}

function randomY() {
  return parseInt(Math.random() * height);
}

let fondo_base
let fondo_objetivo
let n
let agents

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  fondo_base = color(120, 200, 10)
  fondo_objetivo = color(40, 80, 210)
  n = 5
  background(fondo_base);
  // noStroke();
  strokeWeight(2)
  agents = []
  for (let i = 0; i < 50; i++) {
    agents.push(new Agent())    
  }
}

function draw() {
  const i = (frameCount % 90) / 90
  const color_actual = lerpColor(fondo_base, fondo_objetivo, i)
  background(color_actual)
  drawColumns(frameCount)
  for (const agent of agents) {    
    agent.draw()
    agent.update()
  }
}

class Agent {
  constructor() {
    this.x = randomX()
    this.y = randomY()
    this.orientation = Math.random() * 360
    this.speed = 2
    this.shape = true
  }

  update() {
    this.x = this.x + this.speed * Math.sin(this.orientation)
    this.y = this.y + this.speed * Math.cos(this.orientation)

    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.speed = this.speed * -1
      this.shape = !this.shape
    }
  }

  draw() {
    // let c = color(255, 255, 255, 0.5)
    // fill(c)
    noFill()
    if (this.shape) {
      circle(this.x, this.y, 30)
    } else {
      square(this.x, this.y, 30);
    }
  }

  setOrientation(n) {
    this.orientation = n
  }

  updateOrientation(n) {
    this.orientation = this.orientation + n
  }
}

function mousePressed() {
  fullscreen(true)
  resizeCanvas(windowWidth, windowHeight);
}
