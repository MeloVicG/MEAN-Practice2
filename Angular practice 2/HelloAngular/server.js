const express = require('express')

const app = express()

app.use(express.static(__dirname + '/public/dist/public'))
app.use(express.json({extended:true})) //

app.get('/', (req,res) => {
    console.log("serving angular");
})
app.get('/api/tasks', (req,res) => {
    console.log("blahb lhalbhalhbvlh");
    res.json([{name:'dishes', completed: true,},{name:'sweeping', completed:false}])
})


app.get('/api/tasks/:id', (req,res)=> {
    console.log(req.body);
    res.json(req.body)
})



app.listen(8000, () => {
    console.log('listening on port 8000');
})