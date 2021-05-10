const Discord = require('discord.js');
const leveling = require('discord-leveling');



module.exports.run = async (bot, message, args) => {
    
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
 
    let output = await leveling.Fetch(user.id)
    const me = new Discord.MessageEmbed()
    .addField(`**<:sparkles_blue:787846599430635552>  || ${bot.users.cache.get(user.id).username}**,`,`is currently at **level ${output.level}** with **${output.xp} xp!**`)
    .setColor(0x87CEEB)
    message.channel.send(me);

    
    //message.channel.send(`:sparkles: || **${bot.users.cache.get(user.id).username}** is currently at **level ${output.level}** with **${output.xp} xp!**`);
}


module.exports.help = {
    name: "xp",
    aliases: ["level"]
}