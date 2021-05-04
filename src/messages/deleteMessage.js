const axios = require('axios')
const inquirer = require('inquirer')
const chalk = require('chalk')

const { usage } = require('./usage')
const { errorLog } = require('./error')

const slackChatChannelName = process.env.SLACK_CHAT_CHANNEL_NAME || 'slack-app-cli';
const slackChatChannelNameId = process.env.SLACK_CHAT_CHANNEL_NAME_ID || 'C020W0CSR32';
const slackChatToken = process.env.SLACK_CHAT_TOKEN || 'xoxp-2018800179953-2006185255586-2023777289169-7fb5a6f76dbd244e956ed5646e67bc32';

if (!slackChatToken && slackChatChannelName) {
  return errorLog('Must be provide the token to proceed further');
}

// Send the message to the specified channel.
async function handlerDeleteMessage() {
  const url = 'https://slack.com/api/chat.delete';
  const res = await axios.post(url, 
    {
      channel: slackChatChannelNameId,
      ts: '1620144196.001000'
    }, 
    { 
      headers: { authorization: `Bearer ${slackChatToken}` } 
    }
  );
  
  if (!res.data.ok) {
    return errorLog(`Error! ${res.data.error}`);
  }
  let successLog = chalk.green(`Message was deleted with channel #${slackChatChannelName}`)
  console.log(successLog);
  return 'message deleted';
}

module.exports = {
    handlerDeleteMessage
}