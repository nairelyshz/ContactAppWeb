
const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const firebaseAdmin = require('./config/database')();
require('./services/contacts/contacts')(app, firebaseAdmin);
require('./services/auth/auth')(app, firebaseAdmin);

app.listen(8080, () => {
 console.log("Server started port 8080");
});