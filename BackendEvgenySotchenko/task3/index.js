
// index.js
const app = require('./app'); // Импортируем приложение из app.js
const blueText = '\x1b[36m';
const resetText = '\x1b[0m'; // Reset to default color

const PORT = process.env.PORT || 3000; // Устанавливаем порт

app.listen(PORT, () => {
    console.log(`${blueText}Server is running on port ${PORT}${resetText}`);
});