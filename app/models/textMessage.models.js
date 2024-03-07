module.exports = (sequelize, Sequelize) => {
  const TextMessage = sequelize.define("textMessage", {
    chatId: {
      type: Sequelize.STRING(32)
    },
    text: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING(16)
    },
    image:{
      type: Sequelize.STRING

    }
  });

  return TextMessage;
};
