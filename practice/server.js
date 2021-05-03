const express = require('express')

const app = express()

//this get the index.html in dist folder
app.use(express.static(__dirname + '/sample-app/dist/sample-app'))
app.use(express.json())

app.get('/', (req, res) => {

})


app.get('/tasks', (req, res) => {
    console.log("received request /task");
    res.json([{ name: 'dishes' }, { name: 'sweeping' }])
})


app.listen(8001)