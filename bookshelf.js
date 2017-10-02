var Bookshelf = require('bookshelf')
var knex = require('./knex')

console.log('Instanciating Bookshelf')
var Bookshelf = Bookshelf(knex)

Bookshelf.plugin('registry')

console.log('Building bookshelf')
module.exports = Bookshelf