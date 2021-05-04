# slack-app-cli
<b>Installation</b>
1. Download the code from repo or clone repo from GIT
2. Run `npm install` to install packages
3. Need to add SLACK TOKEN & CHANNEL NAME to send message to channel. So token was created with slack website based on steps and permission was given access the <i>chat</i> endpoints. Shared this token privately.
4. Replace SLACK TOKEN in the below files because not able use it in files while shaing this code.
    `src/messages/sendMessage.js <br> src/messages/updateMessage.js <br> src/messages/deleteMessage.js`
5. Added bin commands to excute this CLI globally to use this command to make it `npm link`
6. To execute for checking need to use command `slackcli sendMessage` for sending chat message into slack channel.
