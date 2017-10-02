console.log('started app')


const Person = require('./person')

new Person({ id: 1 })
    .fetch({ withRelated: ['contact'], require: true })
    .then(function(model) {
        console.log('Model: ' + JSON.stringify(model.toJSON()))
    })