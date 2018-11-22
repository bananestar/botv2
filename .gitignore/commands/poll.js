const Discord = require("discord.js");

exports.run = (client, message, args, level) => {

  let question = args.slice(0).join(" ");

  if (args.length === 0)
  return message.reply('**Invalid:** `*Poll <Question>`')

  const embed = new Discord.RichEmbed()
  .setTitle("Sondage")
  .setColor("#5599ff")
  .setDescription(`${question}`)
  .setFooter(`Sondage par: ${message.author.username}`, `${message.author.avatarURL}`)

  message.channel.send({embed})
  .then(msg => {
    msg.react('👍')
    msg.react('👎')
    msg.react('🤷')
  })
  .catch(() => console.error('Emoji failed to react.'));

}

 
