const db = require("../models");
const TextMessage = db.textMessage;
const Op = db.Sequelize.Op;
const { FunctionSendMessage } = require('../../telegramBot');


// Create and Save a new TextMessage
exports.create = (req, res) => {
  // Validate request
  if (!req.body.text && !req.body.chatId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a TextMessage
  const textMessage = {
    chatId: req.body.chatId,
    text: req.body.text,
    type: req.body.type,
    image: req.body.image
  };

  // Save TextMessage in the database
  TextMessage.create(textMessage)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the TextMessage."
      });
    });
};

// send a message to specific chat id
exports.sendMessage = (req, res) => {
  console.log("req.body",req.body)
  // Validate request
  if (!req.body.text && !req.body.chatId) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  FunctionSendMessage(req.body.chatId, req.body.text)
  .then(() => {
    res.status(200).send({
      message: "Message sent successfully!"
    });
  })
  .catch(error => {
    console.error('Failed to send message:', error.message);
    res.status(500).send({
      message: "Failed to send message"
    });
  });  
};
