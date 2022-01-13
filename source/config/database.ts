import mysql from 'mysql';

const connection = mysql.createConnection({
    host: "remotemysql.com",
    user: 'o3GFt4AC9E',
    password: 'lXfNDwGcpY',
    database: 'o3GFt4AC9E',
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