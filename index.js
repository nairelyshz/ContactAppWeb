
const express = require("express");
const app = express();
require('./services/contacts/contacts')(app);
require('./services/auth')(app);

app.listen(8080, () => {
 console.log("Server started port 8080");
});