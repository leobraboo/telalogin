const {Router} = require("express")
const LoginRoute = require("./login")

const router = Router()

router.use('/', LoginRoute)


module.exports = router;