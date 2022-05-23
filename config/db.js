const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'cicada3301',
      database : 'usuario'
    }
  });

module.exports = knex;