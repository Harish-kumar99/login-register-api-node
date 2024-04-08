const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const db = require('./db');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', routes);

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE, password TEXT)");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
