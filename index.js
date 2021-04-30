const express = require('express')
const app = express()
const bodyParser = require('body-parser')
 const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost:27017/uts2', {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
    console.log('koneksi sukses')
}).catch((e) => {
    console.log(e)
    console.log('koneksi gagal')
})
app.use(bodyParser.json({
    extends: true, 
    limit: '20mb'
}))
app.use(bodyParser.urlencoded({
    extends: true, 
    limit: '20mb'
}))



app.use('/alatolahraga/',require('./routes/alatolahraga'))

app.listen(3000,() => {
    console.log('Server Started')
})