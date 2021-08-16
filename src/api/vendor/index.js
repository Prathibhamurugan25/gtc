const express = require('express');
const router = express.Router();
const controller = require('./vendor.controller');

router.get('/:id', controller.getVendorById);
router.get('/', controller.getVendor);
router.post('/', controller.saveVendor);
router.put('/:id', controller.updateVendor);
router.delete('/:id', controller.deleteVendor);

module.exports = router;
