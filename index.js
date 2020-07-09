
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const db = require('./config/database')();
require('./services/contacts/contacts')(app, db);
require('./services/auth/auth')(app, db);

app.listen(8080, () => {
 console.log("Server started port 8080");
});