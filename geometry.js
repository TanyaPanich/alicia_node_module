//const volume = require('./volumes')
//we don't want to repeat "volume", so we use OBJECT DESTRUCTION!
const {sphereVolume, torusVolume} = require('./volumes')
console.log(torusVolume(4, 3))
console.log(sphereVolume(4, 3))

//console.log(volume(4, 3))
