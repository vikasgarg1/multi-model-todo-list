const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo_controller')

router.get('/', todoController.list) // index => get all
router.post('/', todoController.create) // create =?

router.get('/new', todoController.new)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.delete)

router.get('/:id', todoController.listOne)
router.get('/:id/edit', todoController.edit)

module.exports = router
