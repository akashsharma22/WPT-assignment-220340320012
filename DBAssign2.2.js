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


let id ='2';  
let name ='Butter'; 
let price ='15'; 
let category ='food';
connection.query('update item set name=?,category=?,price=? where id=?', [name,category,price,id], 
(err, res1) => {
    if (err) {
        console.log(err);  
    }  else {
        if(res1.affectedRows===0)
        {
            console.log("update failed");
        } 
        else
           console.log("update suceeded");    
       
    }
}
);