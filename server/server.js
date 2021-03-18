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

//requiring path and fs modules
const path = require('path');
const fs = require('fs');
var dirPath = path.join(__dirname, '/pd');
var filesList;

// simple route
app.get("/", (req, res) => {
  fs.readdir(dirPath, function(err, files){
    filesList = files.filter(function(e){
      return path.extname(e).toLowerCase() === '.pdf'
    });
    console.log(filesList[0]);
  });
  //res.json({ message: "Aplikacja do wylistowania plików doc/pdf." });
  res.send(JSON.stringify(filesList));

});

const api = require("./app/routes/files.router.js")(app);
app.use('/api/files',api)
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


