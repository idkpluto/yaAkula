const Discord = require("discord.js");
const fs = require("fs");
const money = require("../money.json");
const shark = require("../sharks.json");

module.exports.run = async (bot, message, args) => {

    const me = new Discord.MessageEmbed()
    //.setTitle('List of Discovered Fossils')
    .addField('<:sparkles_silver:789509208243830814> Megalodon', `Colossal Tooth - Giant Pectoral Fin - Enlarged Dorsal Fin \n (3/3) :white_check_mark:  \n (Discovered by sodapop, rania and vazio)`)
    .addField('\u200b','\u200b')
    .addField('<:sparkles_silver:789509208243830814> Unknown', "Unknown Scales - Draconic Ancestry - ??? \n (2/3) :question: \n (Discovered by idkpluto and sodapop)")
    .addField('\u200b','\u200b')
    .addField('<:sparkles_silver:789509208243830814> Unknown', "Strange Limb - ??? \n (1/3) :question: \n (Discovered by sodapop)")
    .addField('\u200b','\u200b')
    .addField('<:sparkles_black:787849447618510858> Unknown', "Unknown Pectoral Fin - Narrow Caudal Fin - ??? \n (2/3) :question: \n (Discovered by rania)") //blood
    .addField('\u200b','\u200b')
    .addField('<:sparkles_black:787849447618510858> Unknown', "Infected Gill - Mutated Dorsal Fin - ??? \n (2/3) :question: \n (Discovered by vazio)") 
    .addField('\u200b','\u200b')
    .addField('<:sparkles_black:787849447618510858> Unknown', "Odd Tentacle - Strange Cranium - ??? \n (2/3) :question: \n (Discovered by vazio and homboii)")
    .addField('\u200b','\u200b')
    .addField('<:sparkles_black:787849447618510858> Unknown', "Elongated Tongue - Multiscale - ??? \n (2/3) :question: \n (Discovered by sodapop)")



    .setFooter('Full extensive list of all discovered fossils to date on yaAkula.')

    .setColor(0x87CEEB)
    //.setThumbnail('https://i.pinimg.com/originals/61/58/cb/6158cb32e8da1819bca3868dbdd7503a.jpg')
    message.channel.send(me);


}

module.exports.help = {
    name: "allfossils",
    aliases: ["fossils","fossil"]
}