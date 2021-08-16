const express = require('express');
const router = express.Router();
const controller = require('./wish_list.controller');

router.get('/:id', controller.getWish_ListById);
router.get('/', controller.getWish_List);
router.post('/', controller.saveWish_List);
router.put('/:id', controller.updateWish_List);
router.delete('/:id', controller.deleteWish_List);

module.exports = router;
