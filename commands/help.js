const Discord = require("discord.js");
const fs = require("fs");
const money = require("../money.json");
const shark = require("../sharks.json");
var version = "alpha0.1";

module.exports.run = async (bot, message, args) => {

    const me = new Discord.MessageEmbed()
    .addField('Welcome to <:sparkles_light:787846194005147658> yaAkula!',"To begin your journey please use **ya!balance** to receive your starting money, and **ya!myshark** to adopt your first shark! Good luck!")

    .setColor(0x87CEEB)
    .setThumbnail('https://pbs.twimg.com/media/DiySo9aVAAUUBBY.jpg')
    message.channel.send(me);


}

module.exports.help = {
    name: "help",
    aliases: ["tutorial"]
}