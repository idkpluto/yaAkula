const Discord = require("discord.js");
const money = require("../money.json");
const fs = require("fs");
const organisations = ["000A","000B","000C","000D"];
const investment = require("../investments.json");
const organisation = require("../organisations.json");




module.exports.run = async (bot, message, args) => {
    
    var user = message.author;

    try {
        var newinvestment = parseInt(args[0]);
    } catch {
        return message.reply("you can only enter whole numbers.")

    }
    
    investment[message.author.id].investment += (newinvestment);
    
    fs.writeFile("./investments.json", JSON.stringify(investment), (err) => {
        if(err) console.log(err);
    });


    const me = new Discord.MessageEmbed()
    .addField(`:earth_africa:  || **${bot.users.cache.get(user.id).username}**`, `has invested an additional **︽${newinvestment}** and now has an investment total of **︽${investment[message.author.id].investment}**!`)
    .setColor(0x87CEEB)
    return message.channel.send(me);
} 

module.exports.help = {
    name: "investmoreeeee",
    aliases: []
}