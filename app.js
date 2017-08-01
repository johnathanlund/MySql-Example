//app.js
const mysql = require('mysql');

// First you need to create a connection to the db
const con = mysql.createConnection({
  host: 'localhost',
  user: 'petra23',
  // password: 'password',
  database: 'mySqlExDB'
});

con.query('SELECT * FROM employees', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db shows:\n');
  // console.log(rows);
  rows.forEach((row) => {
    console.log(`${row.name} is in ${row.location}`);
  });
} )

// const employee = { name: 'Zinnie', location: 'Mali'};
// con.query('INSERT INTO employees SET ?', employee, (err, res) => {
//   if(err) throw err;
//   console.log('Last insert ID: ', JSON.stringify(res.insertId));
// });
//
// con.query(
//   'UPDATE employees SET location = ? Where ID = ?',
//   ['Jordan', 7],
//   (err, result) => {
//     if (err) throw err;
//
//     console.log(`Changed ${result.changedRows} row(s)`);
//   }
// );
// con.query(
//   'DELETE FROM employees WHERE id = ?', [6], (err, result) => {
//     if (err) throw err;
//
//     console.log(`Deleted ${result.affectedRows} row(s)`);
//   }
// );

// con.connect((err) => {
//   if(err){
//     console.log('Error connecting to Db: ' + err);
//     return;
//   }
//   console.log('Connection established');
// });

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});
