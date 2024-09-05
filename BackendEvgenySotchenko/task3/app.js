// app.js
const express = require('express');
const scoreboardRoutes = require('./routes/scoreboardRoutes');

const app = express();

app.use(express.json());
app.use('/api/scores', scoreboardRoutes);

module.exports = app; // Экспортируем приложение

