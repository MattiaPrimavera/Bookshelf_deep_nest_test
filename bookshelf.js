var Bookshelf = require('bookshelf')
var knex = require('./knex')

console.log('Instanciating Bookshelf')
var bookshelf = Bookshelf(knex)

bookshelf.plugin('registry')

console.log('Building bookshelf')
module.exports = bookshelf