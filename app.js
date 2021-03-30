require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const app = express();
const bodyParser = require("body-parser");

app.set("port", 4000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME
});
con.connect(er => {
    if(er) throw er;
    console.log("connected to database!");
});

app.get("/api/people", (req, res) => {
    if(!req.query.id) {
        let sql = "select customer_id, first_name, last_name, active from customer order by first_name";
        con.query(sql, (e, r) => {
            if(e) return res.status(500).send(e);
             res.send(r);
        });
    } else {
        let sql = "select * from customer inner join customer_list on customer.customer_id = customer_list.ID where customer.customer_id = ?";
        con.query(sql, [req.query.id], (e, r) => {
            if(e) return res.status(500).send(e);
            res.send(r);
        });
    }
    
});
app.get("/", (req, res) => {
    res.send("Welcome to sakila api! You can query current profiles via /api/people. You can register a new profile via /add.");
});
app.get("/add", (req, res) => {
    if(!req.query.first_name || !req.query.last_name || !req.query.email) {
        res.send("First name, Email Address, or Last name field left empty!");
    } else {
        let sql = "insert into customer (store_id, first_name, last_name, email, address_id, active, create_date, last_update) values (1, ?, ?, ?, 1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)";
        con.query(sql, [req.query.first_name, req.query.last_name, req.query.email], (e, r) => {
            if(e) return res.status(500).send(e);
            res.send("Successfully added new profile!");
        });   
    }
});

app.get("/login", (req, res) => {
    if(!req.query.username || !req.query.password) {
        res.send("Insufficient authentication details!");
    } else {
        let sql = "select * from staff where username = ? and password = ?";
        con.query(sql, [req.query.username, req.query.password], (e, r) =>{
             if(e) return res.status(500).send(e);
             if(Object.keys(r).length === 1) {
                 res.send({
                     message: "success",
                     detail: r
                 });
             } else {
                 res.send({
                     message: "failed authentication",
                     detail: {}
                 })
             }
        });
    }
})

app.listen(4000, () => {
    console.log("listening on port 4000 . . .");
});
