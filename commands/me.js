const Discord = require("discord.js");
const fs = require("fs");
const money = require("../money.json");
const shark = require("../sharks.json");
const occupation = require("../occupation.json");
const leveling = require('discord-leveling');
const sosbadge = require("../sosbadge.json");
const zoo = require("../zoo.json");
const organisation = require("../organisations.json");
const investment = require("../investments.json");
var version = "alpha0.4";


module.exports.run = async (bot, message, args) => {

    var user = message.author;
    let output = await leveling.Fetch(user.id)
    if(!occupation[user.id]) {
        occupation[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            occupation: "N/A",
            

        }
        fs.writeFile("./occupation.json", JSON.stringify(occupation), (err) => {
            if(err) console.log(err);
        
        });

    }

    if(!sosbadge[user.id]) {
        sosbadge[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            sosbadge: "N/A",
            

        }
        fs.writeFile("./sosbadge.json", JSON.stringify(sosbadge), (err) => {
            if(err) console.log(err);
        
            
        });
    }

    if(!zoo[user.id]) {
        zoo[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            zoo: "nothing",
            

        }
        fs.writeFile("./zoo.json", JSON.stringify(zoo), (err) => {
            if(err) console.log(err);
        
            
        });
    }

    if(!organisation[user.id]) {
        organisation[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            organisation: "N/A",
            

        }
        fs.writeFile("./organisations.json", JSON.stringify(organisation), (err) => {
            if(err) console.log(err);
        
            
        });
    }

    if(!investment[user.id]) {

        investment[message.author.id] = {
            name: bot.users.cache.get(message.author.id).tag,
            investment: 0,

        }


        fs.writeFile("./investments.json", JSON.stringify(investment), (err) => {
            if(err) console.log(err);
        });
    }

    const me = new Discord.MessageEmbed()
    .addField('Kids on the Moon', message.author.username)
    .addField('Companion', shark[message.author.id].shark)
    .addField('Affiliation', organisation[message.author.id].organisation)
    .addField('Version', version)
    .addField('Balance', money[message.author.id].money.toLocaleString())
    .addField('Level', output.level)
    .addField('Rank', occupation[message.author.id].occupation)
    .setFooter(sosbadge[message.author.id].sosbadge)
    
    //.addField('Status',)

    .setColor(0x87CEEB)
    .setThumbnail(message.author.displayAvatarURL())
    message.channel.send(me);


}

module.exports.help = {
    name: "me",
    aliases: []
}