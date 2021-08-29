const client = new tmi.Client({
	channels: [ 'EseMismoBruno' ],
  identity: identity
})

client.connect()

const commander = new EventEmitter()

client.on('message', (channel, tags, message, self) => {
	console.log(`${tags['display-name']}: ${message}`);
  const result = parseCommand(message)
  if (result) {
    const {
      command,
      arguments
    } = result
    const data = {
      channel,
      tags,
      message,
      self,
      command,
      arguments
    }
    commander.emit(command, data)
  }
})