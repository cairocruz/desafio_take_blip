const express = require('express')
const cors = require('cors')

const app = express();

const port = process.env.PORT || 8085;
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(require('./routes'))

app.listen(port, function(){
    console.log("server on port:" + port)
})