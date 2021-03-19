/**
 * Server controller
 */

const db = require("../models");
const Files = db.dbdoc;
const Op = db.Sequelize.Op;

const path = require('path');
const fs = require('fs');
// Save new path

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

    console.log(fs.existsSync(req.body.url))
    if(!fs.existsSync(req.body.url)){
        res.status(500).send({
            message: "This path doesn't exist!"
        });
        return;
    };


    dirPath = req.body.url;
    res.send(JSON.stringify(dirPath))
};

// Retrieve all Files from the path
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