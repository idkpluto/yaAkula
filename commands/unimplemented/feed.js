const fs = require("fs");
const shark = require("../sharks.json");
var hunger = require("../sharks.json");
let myArray = ["Blue Shark", "Mako Shark", "Tiger Shark", "Whale Shark", "Mud Shark"];
var randomSpecies = myArray[Math.floor(Math.random()*myArray.length)];

module.exports.run = async (bot, message, args) => {

    if(!args[0]) {
        var user = message.author;
    } else {
        var user = message.mentions.user.first() || bot.users.cache.get(args[0]);
    }

    if(!shark[user.id]) {
        shark[user.id] = {
            hunger: 100,
            
            

        }
        fs.writeFile("./sharks.json", JSON.stringify(shark), (err) => {
            if(err) console.log(err);
            
        });
    }

    return message.reply(`Your :shark: **${shark[user.id].shark}** has been fed!`);



}

module.exports.help = {
    name: "feed",
    aliases: []
}