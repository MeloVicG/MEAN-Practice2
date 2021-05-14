// Load the express module (Where do you think this comes from?)
const express = require("express");
const bodyParser = require("body-parser")
const session = require("express-session")
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

mongoose.connect('mongodb://localhost/newest_practiceDB', { useNewUrlParser: true });


const TshirtScheme = new mongoose.Schema({
    color:String,
    logo:String
})
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    password: String,
    tshirts:[TshirtScheme],
})
// create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model('User', UserSchema);
const Tshirt = mongoose.model('Tshirt', TshirtScheme);


const app = express();
app.use(express.static(__dirname + "/static"));
//key is used to excrypt everyones info
app.use(session({ 
    secret: 'I Am IronMan',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge: 60000
    }
}))
app.use(bodyParser.urlencoded({ extended: true }))
// does this set users.ejs??? 
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

//routing
require('./server/configs/routes')(app)

// app.get('/', (req, res) => {
//     res.send('Home')
// })

// app.get('/users', (req,res)=>{
//     User.find({})
//     .then(users => {
//         console.log(users);
//     })
//     .catch(err => {console.log((err));})
// })

app.get('/setup', (req,res) => {
    for(let i =0 ; i < 5; i++){
        const shirt = new Tshirt()
        shirt.color = 'black'
        shirt.logo = 'avengers'
        shirt.save()
        .then(newshirt => {
            User.findOne({})
            .then( user => {
                user.tshirts.push(newshirt)
                user.save()
                .then(updateduser => {
                    console.log(updateduser);
                })
                .catch(err => {console.log(err)})
            })
            .catch(err => {console.log(err)})
            console.log('saved', newshirt);
        })
        .catch( err => {console.log(err);})

        res.redirect('/')
    }
})

app.get('/fix', (req,res) => {
    User.findOne({})
    .then(user => {
        user.email ="bob@bob.com"
        //bcrypt to hash this 10 times
        bcrypt.hash('asdfasdf', 10)
        .then(hash => {
            user.password = hash
            user.save()
            .then(updateduser => {
                console.log(updateduser);
            })
            .catch(err => {console.log(err)})
        })
        .catch(err => {console.log(err)})
    })
    .catch(err => {console.log(err)})
    res.redirect('/')
})

//post
app.get('/login', (req,res) => {
    //            req.params.email
    User.findOne({email:'bob@bob.com'})
    .then(user => {
        //req.params.password  //to compare password that was given to us
        bcrypt.compare('asdfaasdf', user.password)
        .then(result => {
            if(result){
                //login
                req.session['user_id'] = user._id
            }
            else{
                //bad login
                res.redirect('/')
            }
            console.log('password authenticated?', result);
        })
        .catch(err => {console.log(err)})
    })
    .catch(err => {console.log(err)})
    res.redirect('/')
})


// Tell the express app to listen on port 8000
app.listen(8000, function () {
    console.log("listening on port 8000");
})
  // this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
