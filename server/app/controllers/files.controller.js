const db = require("../models");
const Files = db.dbdoc;
const Op = db.Sequelize.Op;

const path = require('path');
const fs = require('fs');
// Save new URL

var dirPath = path.format({
    root: '/ignored',
    dir: '/home/patrycja/Desktop/Repositories/doc-webapp/server/pd',
})


exports.create = (req, res) => {
    if(!req.body.url){
        res.status(500).send({
            message: "Content can not be empty!"
        });
        return;
    }

    try {
        if (fs.existsSync(req.body.url)) {
            //var filesList = fs.readdirSync(req.body.url);
            dirPath = req.body.url;
            res.send(JSON.stringify(dirPath))
        }
      } catch(err) {
        res.status(500).send({
            message: "This path doesn't exist!"
        })
        console.error(err)
        return;
    }
};

// Retrieve all Files from the URL
exports.findAll = (req, res) => {
    var filesList = fs.readdirSync(dirPath);
  
    var list = []

    filesList.forEach(file => { 
        if(path.extname(file) === ".pdf" || path.extname(file) === ".doc"){
            list.push(file);
            console.log(file)
        }
        console.log(file); 
    }); 

    r = {
        files: list,
        url: dirPath
    };

    res.send(JSON.stringify(r));

};