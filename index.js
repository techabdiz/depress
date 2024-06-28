const express = require('express')
const app = express()

const port = process.env.PORT || 3000
app.get('/', (req, res)=> {
    res.send({
        message: 'Hello, ' + (req.query['name']||'John Doe')
    })
});

app.get('/help', (req, res)=>{
    res.send({
        message: 'this is supposed to be the help page :('
    })
})

app.listen(port, ()=>{
    console.log('app ready listening to port ' + port)
})