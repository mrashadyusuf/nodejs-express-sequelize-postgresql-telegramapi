const schedule = require('node-schedule');
const { FunctionSendMessage } = require('./telegramBot');


// Example: Run a task every minute
const mainTask = schedule.scheduleJob('*/30 * * * * *', () => {
    console.log('Running task every minute:', new Date());
    FunctionSendMessage('7078296318','message from scheduler')
  // Add your task logic here

});


// Handle process exit to cancel scheduled jobs
process.on('exit', () => {
    mainTask.cancel();
  // Add cancellation for other jobs if needed
});

module.exports = {
  // You can export functions or objects related to your scheduler
};
