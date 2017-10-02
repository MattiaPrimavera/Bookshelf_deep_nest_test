var knexConfig = require('knex')({
    client: 'mysql',
//    debug: true,
    connection: {
        host     : '127.0.0.1',
        user     : 'root',
        password : '',
        database : 'btest',
        charset  : 'utf8'
    }
});

console.log('Exporting knex Config')
module.exports = knexConfig