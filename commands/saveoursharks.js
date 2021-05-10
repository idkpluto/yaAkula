const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    
    const me = new Discord.MessageEmbed()
    .addField('#SaveOurSharks!', `Donate today to [The Shark Trust](https://www.sharktrust.org/donate/no-limits-campaign/5/credit-card) and help create a future where sharks thrive within a globally healthy marine ecosystem! `)
    //.setFooter(`yaAkula is a proud supporter of the #SaveourSharks movement.`)
    .setFooter(`Buy a yaAkula #SaveOurSharks Badge today to show your solidarity with ya!sosbadge!`)
    
    //.addField('Status',)

    .setColor(0x87CEEB)
    .setThumbnail(`https://www.sharksups.com/wp-content/uploads/2019/09/SHARKTRUST_logo_white.png`)
    message.channel.send(me);

}

module.exports.help = {
    name: "saveoursharks",
    aliases: ["sos"]
}