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
  }
}