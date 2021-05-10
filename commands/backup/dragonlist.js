const Discord = require("discord.js");
const fs = require("fs");
const money = require("../money.json");
const shark = require("../sharks.json");
const dragon = require("../dragons.json")
var version = "alpha0.1";

module.exports.run = async (bot, message, args) => {

    const me = new Discord.MessageEmbed()
    .setTitle('ya!Akula Dragon List')
    .addField('<:sparkles_light:787846194005147658> Common Dragons (︽125,000)', "Wyrm, Gargouille, Lindworm, Drake")
    .addField('<:sparkles_blue:787846599430635552> Rare Dragons (︽250,000)', "European Dragon, Cockatrice")
    .addField('<:sparkles_green:787846876258762784> Strange Dragons (︽500,000)', "Incognito Dragon, Knucker")  
    .addField('<:sparkles_fiery:787846722121498635> Mystic Dragons (︽1,000,000)', "Ryu, Wyvern, Amphiptere")
    .addField('<:sparkles_red:787846781060251658> Arcane Dragons (︽1,500,000)', "Hydra, Naga, Quetzalcoatl")
    .addField('<:sparkles_black:787849447618510858> Forbidden Dragons (︽3,000,000)', "Ouroboros, Níðhöggr")
    .setFooter('type ya!swapdragon [dragon name] to swap dragons!')
    .setColor(0x87CEEB)
    .setThumbnail('https://scalebranding.com/wp-content/uploads/2020/07/fire-dragon-01.png')
    message.channel.send(me);


}

module.exports.help = {
    name: "alldragons",
    aliases: []
}