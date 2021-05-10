const Discord = require("discord.js");
const fs = require("fs");
const money = require("../money.json");
const inventory = require("../inventory.json");
const investment = require("../investments.json");
const organisation = require("../organisations.json");

module.exports.run = async (bot, message, args) => {
    var user = message.author;

    const me = new Discord.MessageEmbed()
    .addField(`:earth_asia:  || **${bot.users.cache.get(user.id).username}**`, `has invested a total of **︽${investment[user.id].investment.toLocaleString}** into their affiliation **${organisation[user.id].organisation}**!`)
    .setColor(0x87CEEB)
    message.channel.send(me);
    
    //return message.channel.send();



}

module.exports.help = {
    name: "myinvestment",
    aliases: ["myinvest","myinvestments"]
}