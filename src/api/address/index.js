const express = require('express');
const router = express.Router();
const controller = require('./address.controller');

router.get('/:id', controller.getAddressById);
router.get('/', controller.getAddress);
router.post('/', controller.saveAddress);
router.put('/:id', controller.updateAddress);
router.delete('/:id', controller.deleteAddress);

module.exports = router;
