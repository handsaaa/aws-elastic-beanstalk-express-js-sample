const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hi Iam Islam and Iam SRE Engineer, This is a first Full pipeline test'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
