let dbparams=
{
    host: 'localhost',
    user: 'akash',
    password: 'akash501',
    database: 'shirpur',
	port:3306
}; 
const mysql = require('mysql2');
const connection=mysql.createConnection(dbparams);
console.log("db started");


let id ='1';  
let name ='bread'; 
let price ='22'; 
let category ='food';

connection.query('insert into item(id,name,price,category) values (?,?,?,?)', [id,name,price,category], 
(err, res1) => {
    if (err) {
        console.log(err);  
    } else {
        console.log(res1.affectedRows)     
       
    }
}
);