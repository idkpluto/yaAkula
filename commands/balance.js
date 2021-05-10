const Discord = require("discord.js");
const { NONAME } = require("dns");
const fs = require("fs");
const money = require("../money.json");

module.exports.run = async (bot, message, args) => {

    if(!args[0]) {
        var user = message.author;
    } else {
        var user = message.mentions.user.first() || bot.users.cache.get(args[0]);
    }

    if(!money[user.id]) {
        money[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            money: 100,

        }
        fs.writeFile("./money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);
            
        });
    }

    const me = new Discord.MessageEmbed()
    .addField(`:ring:  || **${bot.users.cache.get(user.id).username}**`, `has a grand total of **︽${money[user.id].money.toLocaleString()}** in their balance!`)
    .setColor(0x87CEEB)
    message.channel.send(me);

}

module.exports.help = {
    name: "balance",
    aliases: ["bal", "money"]
}