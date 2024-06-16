const EventEmitter = require ('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log('Core Module')
})

console.log('Antes')

eventEmitter.emit('start')

console.log('Depois')
