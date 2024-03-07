module.exports = app => {
  const textMessage = require("../controllers/TextMessage.controller");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", textMessage.create);
  router.post("/sendMessage", textMessage.sendMessage);

  app.use('/api/textMessage', router);
};
