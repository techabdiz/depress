const express = require('express')
const app = express()

const port = process.env.PORT || 3000
app.get('/', (req, res)=> { 
    name=req.query['name']?req.query['name']:'John Doe'
    res.send({
        message: 'Hello, ' + name
    })
});

app.listen(port, ()=>{
    console.log('app ready listening to port ' + port)
})