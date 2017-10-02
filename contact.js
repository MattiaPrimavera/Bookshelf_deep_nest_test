let BaseModel = require('./base_model');
let Bookshelf = require('./bookshelf')

require('./person')
var Contact = BaseModel.extend({
    tableName: 'contacts',
    person: function() {
        return this.belongsToMany('Person', 'idContact')
    }
})

console.log('Exporting contact')

module.exports = Bookshelf.model('Contact', Contact)