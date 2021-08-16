const express = require('express');
const router = express.Router();
const controller = require('./ad.controller');

router.get('/:id', controller.getAdById);
router.get('/', controller.getAd);
router.post('/', controller.saveAd);
router.put('/:id', controller.updateAd);
router.delete('/:id', controller.deleteAd);

module.exports = router;
