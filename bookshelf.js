var Bookshelf = require('bookshelf')
var knex = require('./knex')

console.log('Instanciating Bookshelf')
var bookshelf = Bookshelf(knex)

bookshelf.plugin('registry')
bookshelf.plugin('bookshelf-manager');

console.log('Building bookshelf')
module.exports = bookshelf