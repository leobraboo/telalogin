const {Router} = require("express")
const LoginRoute = require("./login")
const HomeRouter = require("./home")
const ClienteRouter = require("./clientes")


const router = Router()


router.use('/clientes', ClienteRouter)
router.use('/', LoginRoute)
router.use('/home' ,HomeRouter )

module.exports = router;