const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Jenkins Hello</h1>
        <h2>Welcome</h2>
    `);
});

app.listen(4000, () => {
    console.log('Server running on port 4000 - Jenkins CI/CD test');
});
