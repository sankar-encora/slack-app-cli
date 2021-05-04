// Here usage represents the help guide
const usage = function() {
  const usageText = `
  slack cli app helps you manage you todo tasks.

  usage:
    slackcli <command>

    commands can be:

    sendMessage:      used to send a new message to the channel
    updateMessage:      used to update an existing message for modification
    deleteMessage: used to delete a message in the channel
    help:     used to print the usage guide
  `
  console.log(usageText)
}

module.exports = {
  usage
}