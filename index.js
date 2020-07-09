
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const firebaseAdmin = require('./config/database')();
require('./services/contacts/contacts')(app, firebaseAdmin);
require('./services/auth/auth')(app, firebaseAdmin);

app.listen(8080, () => {
 console.log("Server started port 8080");
});