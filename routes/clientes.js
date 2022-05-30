const { Router } = require('express')
const router = Router();

router.get('/', async(req,res)=>{
    res.render('cliente')
})


module.exports = router