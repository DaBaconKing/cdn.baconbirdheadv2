// server.js
const express = require('express');
const serveIndex = require('serve-index');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'main');

app.use('/cdn', express.static(publicPath));
app.use('/cdn', serveIndex(publicPath, { icons: true }));

app.listen(3000, () => console.log('CDN running at http://localhost:3000/cdn'));
