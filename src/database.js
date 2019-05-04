//const mysql = require('mysql');


const Connection = require('tedious').Connection;


/*const config = {
    user: 'willianrodelo',
    password: 'William25',
    server: 'hotelalmirantedb.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'HotelAlmirante',
 
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}
var config =
{
    userName: 'willianrodelo', // update me
    password: 'William25', // update me
    server: 'hotelalmirantedb.database.windows.net', // update me
    options:
    {
        database: 'HotelAlmirante', //update me
        encrypt: true
    }
}*/

var config = {
    server: 'hotelalmirantedb.database.windows.net',
    authentication: {
      type: 'default',
      options: {
        userName: 'willianrodelo',
        password: 'William25'
      }
    }
    
    ,options: {
      debug: {
        packet: true,
        data: true,
        payload: true,
        token: false,
        log: true
      },
      database: 'HotelAlmirante',
      encrypt: true // for Azure users
    }
    
  };

/*var config = {
    server: 'conserjeria.database.windows.net',
    authentication: {
      type: 'default',
      options: {
        userName: 'conserje',
        password: '*********' 
      }
    }
    
    ,options: {
      debug: {
        packet: true, 
        data: true,
        payload: true,
        token: false,
        log: true
      },
      database: 'Conserjeria',
      encrypt: true // for Azure users
    }
    
};*/

/*sqls.connect(config, (err) => {
    
    if (!err) {
        console.log('DB is CONNECT');
    }else{
        console.log(err)
    }

});*/

const connection = new Connection(config);

connection.on('connect',(err) => {
        if (err){
            console.log(err)
        }else{
            console.log('DB is CONNECT')
        }
    }
);



module.exports = connection;
