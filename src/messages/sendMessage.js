const axios = require('axios')
const inquirer = require('inquirer')
const chalk = require('chalk')

const { usage } = require('./usage')
const { errorLog } = require('./error')

const slackChatChannelName = process.env.SLACK_CHAT_CHANNEL_NAME || 'slack-app-cli';
const slackChatToken = process.env.SLACK_CHAT_TOKEN || 'xoxp-2018800179953-2006185255586-2023777289169-7fb5a6f76dbd244e956ed5646e67bc32';

// if (!slackChatToken && !slackChatChannelName) {
//   return errorLog('Must be provide the token to proceed further');
// }

function askInputMessage() {
  const questions = [{
    name: 'message',
    type: 'input',
    message: 'Enter the message need to post into slack',
    validate: function( value ) {
      if (value.length) {
        return true;
      } else {
        return 'Please enter your message.';
      }
    }
  }]
  return inquirer.prompt(questions)
}

// Send the message to the specified channel.
async function handlerSendMessage(message) {
  const url = 'https://slack.com/api/chat.postMessage';
  const res = await axios.post(url, 
    {
      channel: '#' + slackChatChannelName,
      text: message
    }, 
    { 
      headers: { authorization: `Bearer ${slackChatToken}` } 
    }
  );
  
  if (!res.data.ok) {
    return errorLog(`Error! ${res.data.error}`);
  }
  console.log('res data', res.data)
  let successLog = chalk.green(`Sent message to channel #${slackChatChannelName}: ${message}`)
  console.log(successLog);
  return true;
}

module.exports = {
    askInputMessage,
    handlerSendMessage
}