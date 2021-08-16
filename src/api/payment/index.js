const express = require('express');
const router = express.Router();
const controller = require('./payment.controller');

router.get('/:id', controller.getPaymentById);
router.get('/', controller.getPayment);
router.post('/', controller.savePayment);
router.put('/:id', controller.updatePayment);
router.delete('/:id', controller.deletePayment);

module.exports = router;
