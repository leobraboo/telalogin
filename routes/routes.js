const {Router} = require("express")
const LoginRoute = require("./login")
const HomeRouter = require("./home")

const router = Router()

router.use('/', LoginRoute)
router.use('/home' ,HomeRouter )

module.exports = router;