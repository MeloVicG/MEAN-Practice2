

//------part 1 ------------
//using destructing to bring from example.js

// const {somethingElse, something} = require('./example')

// console.log('main complete', somethingElse, something)

//------part 2 ------------
// const app = {}
// console.log(app);
//                    this parenthesis calls the function app
// require('./example')(app) //if not object??? makes it parameter 
// app.index()

// console.log('main complete', app)

// --- part 3 ---

const app = require('./example')
app.index()
console.log('main complete', app)