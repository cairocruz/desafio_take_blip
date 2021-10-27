const express = require('express')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use(require('./routes'))

app.listen((process.env.PORT || 5000), function(){
    console.log('listening on *:5000');
  });