let BaseModel = require('./base_model');
let Bookshelf = require('./bookshelf')
let knex = require('./knex')
require('./contact')
var Person = BaseModel.extend({
    tableName: 'person',
    contact: function(){
        console.log('Contact model function called!!!!!!!')
        return this.hasOne('Contact', 'id')
    },

    saveDeep: function(object) {
        return knex.insert(object.contact).into('contacts')
            .then(idContact => {
                delete object.contact
                object.idContact = idContact
                return knex.insert(object).into('person')
            })
    }

}, {
    withRelated: [
        'contact'
    ], withKeys: [
        'idContact'
    ]
})

console.log('Exporting Person')
module.exports = Bookshelf.model('Person', Person)