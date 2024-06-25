const express = require('express')
const app = express()

const port = 3000
app.get('/', (req, res)=> { 
    name=req.query['name']?req.query['name']:'John Doe'
    res.send({
        message: 'Hello, ' + name
    })
});

app.listen(3000, ()=>{
    console.log('app ready listening on port ' + port)
})