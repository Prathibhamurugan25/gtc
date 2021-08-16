const express = require('express');
const router = express.Router();
const controller = require('./order.controller');

router.get('/:id', controller.getOrderById);
router.get('/', controller.getOrder);
router.post('/', controller.saveOrder);
router.put('/:id', controller.updateOrder);
router.delete('/:id', controller.deleteOrder);

module.exports = router;
