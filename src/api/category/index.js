const express = require('express');
const router = express.Router();
const controller = require('./category.controller');

router.get('/:id', controller.getCategoryById);
router.get('/', controller.getCategory);
router.post('/', controller.saveCategory);
router.put('/:id', controller.updateCategory);
router.delete('/:id', controller.deleteCategory);

module.exports = router;
