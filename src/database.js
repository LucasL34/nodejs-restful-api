const mysql = require( 'mysql' )

const data = {
    host: "localhost",
    user: "root",
    password: "",
    database: "test",
}

const mysqlConnect = mysql.createConnection( data )

mysqlConnect.connect( err => {
    if(err){
        console.error(err);
        return ;
    }else{
        console.log("Connected")
    }
})

module.exports = mysqlConnect;
