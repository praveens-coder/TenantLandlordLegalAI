const express = require('express');
const router = express.Router();
const { askLegalAI } = require('../controllers/aiController');

router.post('/ask', askLegalAI);

module.exports = router;
