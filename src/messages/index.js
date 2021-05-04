const axios = require('axios')
const inquirer = require('inquirer')
const chalk = require('chalk')

const { usage } = require('./usage')
const { errorLog } = require('./error')

const sendMessages = require('./sendMessage')
const updateMessages = require('./updateMessage')
const deleteMessages = require('./deleteMessage')

const args = process.argv
const commands = ['sendMessage', 'updateMessage', 'deleteMessage', 'help']


// make sure the length of the arguments is exactly three
if (args.length > 3) {
  errorLog(`only one argument can be accepted`)
  usage()
}

if (commands.indexOf(args[2]) == -1) {
  errorLog('invalid command passed')
  usage()
}

switch(args[2]) {
  case 'help':
    usage()
    break
  case 'sendMessage':
    break
  case 'updateMessage':
    break
  case 'deleteMessage':
    break
  default:
    errorLog('invalid command passed')
    usage()
}

// Getting message input from user when sendMessage command was passed
if(args[2]=='sendMessage'){  
  const run = async () => {
    const inputDetails = await sendMessages.askInputMessage();
    const result = sendMessages.handlerSendMessage(inputDetails.message)
  };

  run();  
}

if(args[2]=='updateMessage'){  
  const run = async () => {
    const inputDetails = await updateMessages.askUpdateInputMessage();
    const result = updateMessages.handlerUpdateMessage(inputDetails.message)
  };

  run();  
}

if(args[2]=='deleteMessage'){  
  const run = async () => {
    const result = deleteMessages.handlerDeleteMessage()
  };

  run();  
}


