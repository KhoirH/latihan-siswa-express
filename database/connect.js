const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_traning2'
})


const getUser = (username, password, callback) => {
  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query('SELECT * from user where username = ? and password = ?',
      [username, password], function (error, results) {
        if (error) reject(error);
        resolve(results)
        connection.end();
      });
    // connection.query('SELECT * from user where username = ? and password = ?', 
    // [username, password], function (error, results) {
    //   if (error) callback(true, error);
    //   callback(null, results)
    // });
  });
}

module.exports = {
  getUser
}