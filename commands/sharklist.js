const Discord = require("discord.js");
const fs = require("fs");
const money = require("../money.json");
const shark = require("../sharks.json");
var version = "alpha0.1";

module.exports.run = async (bot, message, args) => {

    const me = new Discord.MessageEmbed()
    .setTitle('ya!Akula Shark List')
    .addField('<:sparkles_light:787846194005147658> Common Sharks (︽500,000)', "Zebra Shark, Whale Shark, Nurse Shark, Mud Shark, Horn Shark, Porbeagle Shark")
    .addField('<:sparkles_blue:787846599430635552> Rare Sharks (︽1,000,000)', "Blue Shark, Mako Shark, Saw Shark, Sand Tiger Shark, Sleeper Shark")
    .addField('<:sparkles_green:787846876258762784> Strange Sharks (︽3,000,000)', "Frilled Shark, CookieCutter Shark, Greenland Shark, Anvil Shark, Megamouth Shark")  
    .addField('<:sparkles_fiery:787846722121498635> Mystic Sharks (︽5,000,000)', "Tiger Shark, Goblin Shark, Thrasher Shark, Bull Shark, Scissortooth Shark")
    .addField('<:sparkles_red:787846781060251658> Arcane Sharks (︽6,000,000)', "Hammerhead Shark, Great White Shark, Buzzsaw Shark")
    .addField('<:sparkles_silver:789509208243830814> Apex Sharks (︽8,000,000)', "Megalodon Shark *(discovered by rania, sodapop, vazio)*, Mustang Shark, ???")
    .addField('<:sparkles_black:787849447618510858> Forbidden Sharks (︽10,000,000)', "???")
    .setFooter('type ya!swapshark [shark name] to swap sharks!')
    .setColor(0x87CEEB)
    .setThumbnail('https://scalebranding.com/wp-content/uploads/2020/05/tech-shark-logo.png')
    message.channel.send(me);


}

module.exports.help = {
    name: "allsharks",
    aliases: []
}