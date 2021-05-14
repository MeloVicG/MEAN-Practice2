const Users = require('../controllers/user-controller')

module.exports = (app) => {
    app.get('/', (req, res) => {
        Users.home(req,res)
    })

    // app.get('/users', (req,res)=>{
    //     User.find({})
    //     .then(users => {
    //         console.log(users);
    //     })
    //     .catch(err => {console.log((err));})
    // })
}