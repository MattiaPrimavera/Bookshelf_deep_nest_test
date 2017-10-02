var Bookshelf = require('./bookshelf');

let BaseModel = Bookshelf.Model.extend({
    fetchFull: function() {
        let args;
        if (this.constructor.withRelated) {
            args = {withRelated: this.constructor.withRelated};
        }
        return this.fetch(args);
    }
})

module.exports = BaseModel