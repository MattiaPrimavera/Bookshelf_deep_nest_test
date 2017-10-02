var Bookshelf = require('./bookshelf');

var Contact = Bookshelf.Model.extend({
    tableName: 'contacts'
})

console.log('Exporting contact')

module.exports = Bookshelf.model('Contact', Contact)