import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'techwondoe'
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
  });

  export = connection;