const fs = require('fs');
const path = require('path');

// Load initial scores from JSON file
let scores = {};

// Function to load scores from the JSON file
const loadScores = () => {
    const filePath = path.join(__dirname, '../db/scores.json');
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        scores = JSON.parse(data);
    } catch (error) {
        console.error('Error reading scores from JSON file:', error);
    }
};

// Call the loadScores function to initialize scores
loadScores();

exports.updateScore = (userId, scoreIncrement) => {
    if (!scores[userId]) {
        scores[userId] = 0;
    }
    scores[userId] += scoreIncrement;

    // Save updated scores back to the JSON file
    saveScores();
};

const saveScores = () => {
    const filePath = path.join(__dirname, '../db/scores.json');
    fs.writeFileSync(filePath, JSON.stringify(scores, null, 2), 'utf8');
};

exports.notifyScoreboardUpdate = () => {
    // Implement logic to notify scoreboard for live update
    console.log('Scoreboard updated');
};

exports.getTopScores = () => {
    return Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([userId, score]) => ({ userId, score }));
};
