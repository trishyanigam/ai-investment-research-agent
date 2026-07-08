const express = require('express');
const router = express.Router();

const healthController = require('../controllers/healthController');
const researchController = require('../controllers/researchController');
const { validateAnalyzeRequest } = require('../middleware/validate');

// Diagnostic endpoints
router.get('/health', healthController.checkHealth);

// Research Analysis endpoints
router.post('/analyze', validateAnalyzeRequest, researchController.analyze);

module.exports = router;
