const scoreboardModel = require('../models/scoreboardModel');
const crypto = require('crypto');

exports.updateScore = (req, res) => {
    const { userId, scoreIncrement, actionToken } = req.body;
    const SECRET_KEY = 'your-secret-key';
    // Validate request
    if (!userId || !scoreIncrement || !actionToken) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    // Validate action token
    if (!validateActionToken(actionToken)) {
        return res.status(403).json({ error: 'Unauthorized score update' });
    }

    // Update user score
    scoreboardModel.updateScore(userId, scoreIncrement);

    // Notify scoreboard for live update
    scoreboardModel.notifyScoreboardUpdate();

    res.status(200).json({ message: 'Score updated successfully' });
};

exports.getTopScores = (req, res) => {
    const topScores = scoreboardModel.getTopScores();
    res.status(200).json(topScores);
};

// Helper function to validate action token
function validateActionToken(token) {
    // Implement token validation logic
    try {
        // Разделить токен на части
        const [userId, timestamp, signature] = token.split('.');

        // Проверить, что все части присутствуют
        if (!userId || !timestamp || !signature) {
            return false;
        }

        // Проверить, что токен не просрочен (например, 5 минут)
        const expirationTime = 5 * 60 * 1000; // 5 минут в миллисекундах
        const currentTimestamp = Date.now();
        const tokenTimestamp = parseInt(timestamp, 10);
        if (currentTimestamp - tokenTimestamp > expirationTime) {
            return false;
        }

        // Вычислить подпись токена на основе userId и timestamp
        const expectedSignature = crypto
            .createHmac('sha256', SECRET_KEY)
            .update(`${userId}.${timestamp}`)
            .digest('hex');

        // Сравнить вычисленную подпись с подписью в токене
        return signature === expectedSignature;
    } catch (error) {
        console.error('Error validating action token:', error);
        return false;
    }

}