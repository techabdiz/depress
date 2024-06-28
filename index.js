const express = require('express')
const app = express()

const port = 3000
app.get('/', (req, res)=> {
    res.send({
        message: 'Hello, ' + req.query['name']||'John Doe'
    })
});

app.listen(3000, ()=>{
    console.log('app ready listening to port ' + port)
})