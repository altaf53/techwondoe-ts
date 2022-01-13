import mysql from 'mysql';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: 3306
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
  });

  //for awaking mysql connection
  setInterval(function () {
    connection.query('SELECT 1');
  }, 60000);


  export = connection;