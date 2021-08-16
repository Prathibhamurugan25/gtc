const express = require('express');
const router = express.Router();
const controller = require('./subCategory.controller');

router.get('/:id', controller.getsubCategoryById);
router.get('/', controller.getsubCategory);
router.post('/', controller.savesubCategory);
router.put('/:id', controller.updatesubCategory);
router.delete('/:id', controller.deletesubCategory);

module.exports = router;
