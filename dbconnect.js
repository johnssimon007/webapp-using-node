var mysql = require('mysql');
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : 'zeusbomber',
              database : 'nodedb'
            });

connection.connect(function(err){
            if(!err) {
                console.log("Database is connected ... nn");
            } else {
                console.log("Error connecting database ... nn");
            }
            });
global.db = connection;
