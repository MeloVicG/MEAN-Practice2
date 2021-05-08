// Load the express module (Where do you think this comes from?)
const express = require("express");
const bodyParser = require("body-parser")
const session = require("express-session")

const app = express();
//use command is telling express to use a setting and is expecting us to set up
//which we are using static
//__dirname is the route from server to application
app.use(express.static(__dirname + "/static"));
//key is used to excrypt everyones info
app.use(session({secret:'I Am IronMan'}))
app.use(bodyParser.urlencoded({extended:true}))

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// invoke var express and store the resulting application in var app

// lets handle the base route "/" and respond with "Hello Express"
// app.get('/', function (request, response) {
//     response.send("<h1>Hello Express</h1>");
// })
//routing
app.get('/', (req,res) => {
    //can choose to do nothing if we want to send index.html from static folder
})

app.get('/home', function (request, response) {
    // response.send("<h1>Home</h1>");
    let something = "something else"
    let users = [{name:'bob'}, {name:'carl'}]
    response.render('users', {users: users, something:something})
})

app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/static/home.html')
})
app.post('/login', (req,res) => {
    console.log('this is from form', req.body);
    res.redirect('home')
})
// notice that the function is app.get(...) why do you think the function is called get?





// Tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})
  // this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
