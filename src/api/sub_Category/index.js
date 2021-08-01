const express = require('express');
const router = express.Router();
const controller = require('./sub_Category.controller');

router.get('/:id', controller.getUserById);
router.get('/', controller.getUser);
router.post('/', controller.saveUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;