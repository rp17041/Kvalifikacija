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
    const sqlInsert = "INSERT INTO t_customers (FIRST_NAME, LAST_NAME, BIRTH_DATE, GENDER,  ADRESS_1, ADRESS_2, PHONE_NR, EMAIL) VALUES (?,?,?,?,?,?,?,?)";
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

//Route with select all from policy table
//and send to react for display
app.get("/getPolicy", (req, res) => {
    const sqlSelect = "SELECT * FROM t_policy;";
    mysqlConnection.query(sqlSelect, (err, result) =>{
        res.send(result);
    })
});

//This route is responsible for taking policy variables from react 
// and inserting them into data base 
app.post("/policy", (req, res) => {
    const customerNo = req.body.customer;
    const productNo = req.body.product;
    const contractPeriod = req.body.contractPeriod;
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    const currency = req.body.currency;
    const totalPremium = req.body.totalPremium;
    const adjustment = req.body.adjustment;
    const sqlInsert = "INSERT INTO t_policy (CUSTOMER_NO, PRODUCT_NO, CONTRACT_PEROD, START_DATE,  END_DATE, CURRENCY, TOTAL_PREMIUM, ADJUSTMENT) VALUES (?,?,?,?,?,?,?,?)";
    mysqlConnection.query(sqlInsert, 
        [customerNo, 
        productNo, 
        contractPeriod, 
        startDate, 
        endDate, 
        currency, 
        totalPremium, 
        adjustment], (err, result) =>{
        console.log(err);
    })
});

app.get("/getTariff", (req, res) => {
    const sqlSelect = "SELECT * FROM t_tariff;";
    mysqlConnection.query(sqlSelect, (err, result) =>{
        res.send(result);
    })
});

//This route is responsible for taking tariff variables from react 
// and inserting them into data base 
app.post("/products", (req, res) => {
    const tariffType = req.body.tariffType;
    const tariffValue = req.body.tariffValue;
    parseInt(tariffValue);
    console.log(tariffValue);
    const sqlInsert = "INSERT INTO t_tariff (TARIFF_TYPE, VALUE) VALUES (?,?)";
    mysqlConnection.query(sqlInsert, 
        [tariffType, 
        tariffValue], (err, result) =>{
        console.log(err);
    })
});

//Route with select all from Product table
//and send to react for display
app.get("/getProduct", (req, res) => {
    const sqlSelect = "SELECT * FROM t_product;";
    mysqlConnection.query(sqlSelect, (err, result) =>{
        res.send(result);
    })
});

//This route is responsible for taking product variables from react 
// and inserting them into data base 
app.post("/product", (req, res) => {
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const screenSize = req.body.screenSize;
    const checked = req.body.checked;
    const checkeTwo = req.body.checkeTwo;
    const sqlInsert = "INSERT INTO t_product (P_NAME, PRICE, SCREEN_SIZE, GORILLA_GLASS, PROT_CASE) VALUES (?,?,?,?,?)";
    mysqlConnection.query(sqlInsert, 
        [productName, 
        productPrice, 
        screenSize, 
        checked, 
        checkeTwo], (err, result) =>{
        console.log(err);
    })
});

app.put("/update", (req, res) => {
    const customerNo = req.body.customerNo;
    const email = req.body.email;
    mysqlConnection.query("UPDATE SET t_customers EMAIL = ? WHERE CUSTOMER_NO = ?",
    [email, customerNo]),
    (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
});

app.put("/update", (req, res) => {
    const customerNo = req.body.customerNo;
    const phone = req.body.email;
    mysqlConnection.query("UPDATE SET t_customers PHONE_NR = ? WHERE CUSTOMER_NO = ?",
    [phone, customerNo]),
    (err, result) => {
        if (err){
            console.log(err);
        }else{
            res.send(result);
        }
    }
});

app.listen('3001', () => {
    console.log("App started on port 3001...");
});