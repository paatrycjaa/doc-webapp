module.exports = app => {
    const files = require("../controllers/files.controller.js");
  
    var router = require("express").Router();
  
    // Create a new path
    router.post("/", files.create);
  
    // Retrieve all Files
    router.get("/", files.findAll);

  
    return router;
  };