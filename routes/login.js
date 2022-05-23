const express = require('express')
const router = express.Router()
const knex = require("knex")



router.get('/', (req,res)=>{
    res.render('login')
})

router.post('/salvarLogin',async (req,res)=>{
    
const data = await req.body
console.log(data)
res.status(200).json({message:data})
})



module.exports = router