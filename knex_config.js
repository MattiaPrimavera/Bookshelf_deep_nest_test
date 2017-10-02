var knexConfig = require('knex')({
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user     : 'root',
        password : '',
        database : 'bookshelf_relations_test',
        charset  : 'utf8'
    }
});

console.log('Exporting knex Config')
module.exports = knexConfig