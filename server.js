const express = require('express');
const app = express();
const cardController = require('./controllers/cardController.js');

app.use(express.json());
app.get('/', (req, res) => {
    console.log('Hello World!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});