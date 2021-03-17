module.exports = (sequelize, Sequelize) => {
    const Files = sequelize.define("files", {
      title: {
        type: Sequelize.STRING
      },
      file: {
        type: Sequelize.BLOB
      }
    });
  
    return Files;
  };