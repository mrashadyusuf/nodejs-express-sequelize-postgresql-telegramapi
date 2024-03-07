const TelegramBot = require('node-telegram-bot-api');
const token = '6549288841:AAEidMmFFwFIhzscl-XByKVec2LMz9yRoNw';

const bot = new TelegramBot(token, {polling: true});

// const chatId = '-4131053185' //group
const chatId = '7078296318' //private
const message = 'Hello, this is a Telegram message sent from Node.js!';

// when bot received message
bot.on('message', (msg) => {
    console.log("test");
    console.log('Chat ID:', msg.chat.id);
    console.log('User ID:', msg.from.id);

    var Hi = "hi";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"Hello dear user");
    }
    
    });

// Send the message
bot.sendMessage(chatId, message)
    .then(sentMessage => console.log('Message sent:', sentMessage))
    .catch(error => console.error('Error:', error));

// Listen for a command to /ask a yes or no question
bot.onText(/\/ask/, (msg) => {
    const chatId = msg.chat.id;
  
    // Send a message with a custom keyboard
    bot.sendMessage(chatId, 'Do you want to proceed?', {
      reply_markup: {
        keyboard: [['Yes', 'No']],
        one_time_keyboard: true,
      },
    });
  });
  
// Listen for messages containing 'Yes' or 'No'
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text.toLowerCase();
  
    // Handle the user's response
    if (messageText === 'yes') {
      bot.sendMessage(chatId, 'You chose Yes!');
    } else if (messageText === 'no') {
      bot.sendMessage(chatId, 'You chose No!');
    }
  });


  const FunctionSendMessage = (chatId, message) => {
    console.log("chatId",chatId,' ',message)
    return bot.sendMessage(chatId, message)
      .then(sentMessage => {
        console.log('Message sent:', sentMessage);
        return sentMessage;
      })
      .catch(error => {
        console.error('Error:', error);
        throw error; // Re-throw the error for handling in the calling code
      });
  };


  module.exports = {
    FunctionSendMessage
  };