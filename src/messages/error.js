const chalk = require('chalk')

// used to log errors to the console in red color
function errorLog(error) {
  const eLog = chalk.red(error)
  console.log(eLog)
}

module.exports = {
  errorLog
}