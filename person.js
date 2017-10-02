let BaseModel = require('./base_model');
let Bookshelf = require('./bookshelf')

require('./contact')
var Person = BaseModel.extend({
    tableName: 'person',
    contact: function(){
        console.log('Contact model function called!!!!!!!')
        return this.hasOne('Contact', 'id')
    }
}, {
    withRelated: [
        'contact'
    ]
})

console.log('Exporting Person')
module.exports = Bookshelf.model('Person', Person)