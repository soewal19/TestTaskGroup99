const express = require('express');
const scoreboardController = require('../controllers/scoreboardController');

const router = express.Router();

router.post('/update', scoreboardController.updateScore);
router.get('/top', scoreboardController.getTopScores);

module.exports = router;