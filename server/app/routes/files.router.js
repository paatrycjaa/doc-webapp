module.exports = app => {
    const files = require("../controllers/files.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", files.create);
  
    // Retrieve all Tutorials
    router.get("/", files.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", files.findOne);
  
    return router;
  };