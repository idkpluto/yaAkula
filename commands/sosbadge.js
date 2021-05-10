const Discord = require("discord.js");
const sosbadge = require("../sosbadge.json");
const fs = require("fs");
const money = require("../money.json");
const leveling = require('discord-leveling');

module.exports.run = async (bot, message, args) => {

    let output = await leveling.Fetch(message.author.id)

if(output.level >= 250) {

    var user = message.author;
    

        sosbadge[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            sosbadge: `This user is a proud supporter of the #SaveOurSharks Movement.`,
            

        }
        fs.writeFile("./sosbadge.json", JSON.stringify(sosbadge), (err) => {
            if(err) console.log(err);
        
        });
        return message.channel.send(":military_medal: || You have received the **yaAkula #SaveOurSharks Badge!**")
    } else {
        message.channel.send(":military_medal: || You need to be **Level 250** to obtain the **yaAkula #SaveOurSharks Badge!**")
}
}






module.exports.help = {
    name: "sosbadge",
    aliases: []
}