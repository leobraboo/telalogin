const express = require("express")
const app = express()
const path = require('path')
const port = 3001
const router = require ("./routes/routes")
const cors = require("cors")
app.set('view engine', 'ejs') 

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json())
app.use(cors())
app.use(router)
app.listen(port,function(){
    console.log(`servidor rodando gracas a eriks ${port} `)
})