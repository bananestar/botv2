const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*");

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connected");
});

bot.login("NTE0OTE4MTc4NTY5MzIyNTA2.DtdpkQ.YdVtbPypdmO65BFmtPAezxbVqZs");

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -*help");
    }

    if (message.content === "Salut"){
        message.reply("Bonjour Maitre");
        console.log("Commande Salut effectué");
    }
});
