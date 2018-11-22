    const config = require('../config.json');

exports.run = (client, message, args) => {

return message.reply(`\n${config.prefix}Help\n${config.prefix}Poll <Question>`)

}
