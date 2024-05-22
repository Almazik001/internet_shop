const Router = require('express')
const typeController = require('../controllers/typeController')
const router = new Router()
const checkRole = require('../middleware/checkMiddleware')

router.post('/', checkRole('ADMIN'), typeController.post)
router.get('/', typeController.getAll)

module.exports = router