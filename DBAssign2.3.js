let parameter=
{
    host: 'localhost',
    user: 'akash',
    password: 'akash501',
    database: 'shirpur',
	port:3306
}; 
const mysql = require('mysql2');
const connection=mysql.createConnection(parameter);
console.log("database started");


let id ='3'; 


connection.query('select name,price from item where id=?', [id], 
(err, rows) => {
    if (err) {
        console.log(err);  
    } else 
        if(rows.length>0)
        console.log(rows[0].name+" "+rows[0].price);
        }    
       
    

);