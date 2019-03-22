const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController.js');

// Card routes
router.get('/', cardController.index);
router.get('/new', cardController.new);
router.post('/', cardController.create);
router.get('/:id', cardController.show);
router.get('/:id/edit', cardController.edit);
router.put('/:id', cardController.update);
router.delete('/:id', cardController.delete);

module.exports = router;