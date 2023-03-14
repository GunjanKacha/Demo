const express = require('express');
const mysql2 = require('mysql2');
const app = express();
const bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var cookie = require('cookie-parser');

app.set('view engine',"ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookie());
app.use(express.static('public'));

const conn=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"stud"
})
conn.connect(function(err){
    if(err)throw err
    console.log('connected..');
})
app.get('/registration',(req,res)=>{
    res.render('reg.ejs');
})
app.get('/login',(req,res)=>{
    var str="";
    var str1="";
    res.render('login.ejs',{str,str1});
})
app.get('/index5',(req,res)=>{
    var cook = req.cookies.authcookie;
    console.log("cookie: ",cook);
    if(!cook)
    {
        res.render('reg.ejs');
    }
    else
    {
        var token = jwt.verify(cook,'gunjan');
        console.log("token verify",token);
        res.render('home.ejs',{data:token});
    }
    
})
app.get('/logout',(req,res)=>{
    res.clearCookie("authcookie");
    res.redirect('/registration');
})
app.post('/index2',(req,res)=>{
    var data1 = req.body;
    console.log(req.body);
    if(data1.username == "" || data1.email == "" || data1.pwd == "" )
    {
        res.redirect('/registration');
    }
    else
    {
        var hash = bcrypt.hashSync(req.body.pwd, 10);
        var sql = `insert into regs(username,email,pwd) values ('${req.body.username}','${req.body.email}','${hash}')`;
        conn.query(sql,(err,data)=>{
            if(err)throw err;
            var str=""; 
            var str1="";
            res.render('login.ejs',{str,str1});
        })
    }
})
app.post('/index3',(req,res)=>{
    console.log("index3:::::: ",req.body);
    var sql = `select * from regs where email='${req.body.email}'`;
     conn.query(sql,(err,data)=>{
            if(err)throw err;
            if(data == "")
            {
                var str = "email not found";
                var str1 = "";
                res.render('login.ejs',{str,str1});
                
            }
            else
            {
                console.log(data);
                var hash2 = bcrypt.compareSync(req.body.pwd,data[0].pwd);
                console.log(hash2);
                if(hash2)
                {
                    var token = jwt.sign(data[0].username,'gunjan');
                    console.log(token);

                    res.cookie('authcookie',token);
                    res.redirect('/index5');
                }
                else
                {
                    var str = "";
                    var str1 = "";
                    res.render('login.ejs',{str,str1});
                }
            }
     })

})
app.get('/kuku',(req,res)=>{
    res.clearCookie("authcookie");
    res.redirect('/login');
})
app.get('/kuku',(req,res)=>{
    res.render('kuku-kube.html');
})
app.listen(4040);

