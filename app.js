console.log('started app')


const Person = require('./person')
const Contact = require('./contact')
const bookshelf = require('./bookshelf')
/*new Person({ id: 1 })
    .fetch({ withRelated: ['contact'], require: true })
    .then(function(model) {
        console.log('Model: ' + JSON.stringify(model.toJSON()))
    })
*/

/*new Person({ id: 1 })
    .fetchFull()
    .then(function(model) {
        console.log('Model: ' + JSON.stringify(model.toJSON()))
    })
*/

/*
    Insert test
var person = {
    id: 2,
    idContact: 1,
    name: "Beau gosse"
}

new Person(person)
    .save(null, {method: 'insert'})
 */


var person = {
    name: "Test name 55",
    contact: {
        name: "TEST CONTACT55"
    }
}

var contact = {
    name: "TEST CONTACT55"
}

var PersonObject = new Person(person)

/*
PersonObject
    .save(null, { withRelated: true, method: 'insert' })
*/
/*Person
    .forge(person)
    .save()
    .tap(model => model.related('contact').create(contact))
    .then(s => console.log('created contact : ' + s))
    .catch(error => console.log(error.message));
*/

/*Person.forge({ name: person.name })
    .saveFull(person)
    .then(function(model) {
        console.log('model final subscriber: ' + JSON.stringify(model.toJSON()))
    })*/

new Person()
    .saveDeep(person)
    .then(result => console.log('result : ' + JSON.stringify(result)))
