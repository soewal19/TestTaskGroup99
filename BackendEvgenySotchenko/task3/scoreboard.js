const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// In-memory store for user scores
let userScores = {
    'user1': 100,
    'user2': 200,
    'user3': 150,
    'user4': 300,
    'user5': 250,
    'user6': 50,
    'user7': 400,
    'user8': 350,
    'user9': 450,
    'user10': 500
};

// Function to get top scores
const getTopScores = () => {
    return Object.entries(userScores)
        .map(([userId, score]) => ({ userId, score }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 10);
};

// Endpoint to update user score
app.post('/api/scores/update', (req, res) => {
    const { userId, scoreIncrement, actionToken } = req.body;

    // Validate input
    if (!userId || !scoreIncrement || !actionToken) {
        return res.status(400).json({ message: 'Invalid input' });
    }

    // Validate action token (this is a placeholder for actual validation logic)
    if (actionToken !== 'VALID_ACTION_TOKEN') {
        return res.status(403).json({ message: 'Unauthorized score update attempt' });
    }

    // Update user score
    if (userScores[userId] !== undefined) {
        userScores[userId] += scoreIncrement;
        return res.status(200).json({ message: 'Score updated successfully', scores: getTopScores() });
    } else {
        return res.status(404).json({ message: 'User not found' });
    }
});

// Endpoint to get top scores
app.get('/api/scores/top', (req, res) => {
    const topScores = getTopScores();
    res.status(200).json(topScores);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});