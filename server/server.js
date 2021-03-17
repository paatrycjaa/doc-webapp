const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// mysql base
const db = require("./app/models");
db.sequelize.sync();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Aplikacja do przeglądania plików doc/pdf." });

});

const api = require("./app/routes/files.router.js")(app);
app.use('/api/files',api)
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


