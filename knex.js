// knexfile.js
console.log('Constructing knex ...')

var knexConfig = require('./knex_config')
console.log('knex_config got ... ')

console.log('Building Knex')
module.exports = knexConfig