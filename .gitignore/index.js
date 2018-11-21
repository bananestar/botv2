const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*");

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bonjour Maitre");
        console.log("Commande Salut effectué");
    }

    if (message.content.startsWith(prefix + "sondage")){
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var embed = new Discord.RichEmbed()
            .setDescription("Sondage")
            .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
            .setColor("0xB40404")
            .setTimestamp()
        message.channel.sendEmbed(embed)
            .then(function (message){
                message.react("✅")
                message.react("❌")
            }).catch(function(){
            })
            
        }};
