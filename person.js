var Bookshelf = require('./bookshelf');
console.log('Bookshelf exported : ' + JSON.stringify(Bookshelf))

const Contact = require('./contact')
var Person = Bookshelf.Model.extend({
    tableName: 'person',
    contact: function(){
        return this.hasOne('Contact', 'id', 'idContact')
    }
})

console.log('Exporting Person')
module.exports = Bookshelf.model('Person', Person)