const Discord = require("discord.js");
const { NONAME } = require("dns");
const fs = require("fs");
const money = require("../money.json");


module.exports.run = async (bot, message, args) => {

        var user = message.author;
        if(money[user.id].money <= 0) {
            money[user.id] = {
                name: bot.users.cache.get(user.id).tag,
                money: 100,
    
            }
            fs.writeFile("./money.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);

                return message.channel.send("You have been granted a **︽ ya!Akula Reasearch Grant!**")
                
            });
        }
        else {
            return message.channel.send("You do not qualify for a **︽ ya!Akula Research Grant.**")
        }

    }

module.exports.help = {
    name: "grant",
    aliases: []
}