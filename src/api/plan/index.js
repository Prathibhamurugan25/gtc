const express = require('express');
const router = express.Router();
const controller = require('./plan.controller');

router.get('/:id', controller.getPlanById);
router.get('/', controller.getPlan);
router.post('/', controller.savePlan);
router.put('/:id', controller.updatePlan);
router.delete('/:id', controller.deletePlan);

module.exports = router;
