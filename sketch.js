commander.on('!instrucciones', ({ channel, tags, message, self, command, arguments }) => {
  client.say(channel, `@${tags.username}, aquí tienes la lista de comandos:`)
  client.say(channel, `!instrucciones: muestra esta lista.`)
  client.say(channel, `!imagen URL: Carga una imagen desde el link en URL.`)
  client.say(channel, `!abajo TEXTO: Muestra TEXTO en la posición de abajo.`)
  client.say(channel, `!arriba TEXTO: Muestra TEXTO en la posición de arriba.`)
})

commander.on('!imagen', ({ channel, tags, message, self, command, arguments }) => {
  img = createImg(arguments[0] ?? '')
  img.hide()
})

commander.on('!arriba', ({ channel, tags, message, self, command, arguments }) => {
  arriba = arguments.join(' ')
})

commander.on('!abajo', ({ channel, tags, message, self, command, arguments }) => {
  abajo = arguments.join(' ')
})

let img
let arriba = 'ARRIBA'
let abajo = 'ABAJO'

function setup() {
  createCanvas(640, 480);
  angleMode(DEGREES);
  strokeWeight(10);
  stroke(255);

  textAlign(CENTER);
  textSize(40);

  img = createImg('https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80');
  img.hide()
}

function draw() {
  image(img, 0, 0, width, height);
  text(arriba, 0, 50, width, 100)
  text(abajo, 0, height - 50, width, height - 100)
}