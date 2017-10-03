var Bookshelf = require('./bookshelf');
var knex = require('./knex')

let BaseModel = Bookshelf.Model.extend({
    fetchFull: function() {
        let args;
        if (this.constructor.withRelated) {
            args = {withRelated: this.constructor.withRelated};
        }
        return this.fetch(args);
    },

    saveFull: function(object) {
        let promiseList = []
        if(this.constructor.withRelated) {
            let keys = this.constructor.withKeys
            for(let i = 0; i < this.constructor.withRelated.length; i++) {
                let related = this.constructor.withRelated[i]

                let nested = object[related]

                console.log('Nested is : ' + JSON.stringify(nested))
                delete object[related]

//                delete this[related]
                console.log('Object after delete: ' + JSON.stringify(object))

                let saveObject = this.save
                let setObject = this.set
                return knex.insert(nested).into('contacts')
                    .then(idContact => {
                        console.log('idContact inserted: ' + idContact)
                    })
            }
        }
    }
})

module.exports = BaseModel