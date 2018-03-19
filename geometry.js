//const volume = require('./volumes')
//we don't want to repeat "volume", so we use OBJECT DESTRUCTION!
const {sphereVolume, torusVolume} = require('./volumes')
const chalk = require('chalk')
console.log(chalk.yellow(torusVolume(4, 3)))
console.log(chalk.bgRed(chalk.black(sphereVolume(4, 3))))

//console.log(volume(4, 3))
