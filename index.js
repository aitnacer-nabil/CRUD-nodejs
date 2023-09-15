require('dotenv').config();
const express = require('express');
const session = require('express-session')
const flash  = require('connect-flash')
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const app = express();
const port = 5000 || process.env.PORT ;
const connectDB = require('./server/config/db')

connectDB();

//cuz we have form and pass deta
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(express.static(path.join(__dirname,'./public')))

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
}));

app.use(flash());


app.use(expressLayout)
app.set('layout', './layouts/main');
app.set('view engine','ejs');


app.use('/',require('./server/routers/costumer'))

app.get('*',(req, res)=>{
	res.status(404).render('404');
})
app.listen(port,()=>{
	console.log(`App listening on PORT ${port}`)
})