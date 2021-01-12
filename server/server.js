const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var mysqlConnection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'insurance',
});

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("Connected");
    }
    else
    {
        console.log("Connection Failed");
    }
});


const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/customers", (req, res) => {
    res.send("Hello world!");
});


//Route with select all from customer table
//and send to react for display
app.get("/getCustomer", (req, res) => {
    const sqlSelect = "SELECT * FROM t_customers;";
    mysqlConnection.query(sqlSelect, (err, result) =>{
        res.send(result);
    })
});

//This route is responsible for taking variables from react 
// and inserting them into data base 
app.post("/customers", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const birthday = req.body.birthday;
    const gender = req.body.gender;
    const addressFirst = req.body.addressFirst;
    const addressSecond = req.body.addressSecond;
    const phone = req.body.phone;
    const email = req.body.email;
    const sqlInsert = "INSERT INTO t_customers ";
          sqlInsert=+"(FIRST_NAME, LAST_NAME, BIRTH_DATE,GENDER, ";
          sqlInsert=+" ADDRESS_1, ADDRESS_2, PHONE_NUMBER, EMAIL)";
          sqlInsert=+"VALUES (?,?,?,?,?,?,?,?)";
    mysqlConnection.query(sqlInsert, 
        [firstName, 
        lastName, 
        birthday, 
        gender, 
        addressFirst, 
        addressSecond, 
        phone, 
        email], (err, result) =>{
        console.log(err);
    })
});

app.listen('3001', () => {
    console.log("App started on port 3001...");
});