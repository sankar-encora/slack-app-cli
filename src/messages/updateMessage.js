const axios = require('axios')
const inquirer = require('inquirer')
const chalk = require('chalk')

const { usage } = require('./usage')
const { errorLog } = require('./error')

const slackChatChannelName = process.env.SLACK_CHAT_CHANNEL_NAME || 'slack-app-cli';
const slackChatChannelNameId = process.env.SLACK_CHAT_CHANNEL_NAME_ID || 'C020W0CSR32';
const slackChatToken = process.env.SLACK_CHAT_TOKEN || '';

if (!slackChatToken && slackChatChannelName) {
  return errorLog('Must be provide the token to proceed further');
}

function askUpdateInputMessage() {
  const questions = [{
    name: 'message',
    type: 'input',
    message: 'Enter the message need to modify into slack',
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
async function handlerUpdateMessage(message) {
  const url = 'https://slack.com/api/chat.update';
  const res = await axios.post(url, 
    {
      channel: slackChatChannelNameId,
      text: message,
      ts: '1620131618.000100'
    }, 
    { 
      headers: { authorization: `Bearer ${slackChatToken}` } 
    }
  );
  
  if (!res.data.ok) {
    return errorLog(`Error! ${res.data.error}`);
  }
  let successLog = chalk.green(`Message was updated with channel #${slackChatChannelName}: ${message}`)
  console.log(successLog);
  return 'message updated';
}

module.exports = {
    askUpdateInputMessage,
    handlerUpdateMessage
}