const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('thanks for everything World!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
