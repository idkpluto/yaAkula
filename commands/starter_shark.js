const Discord = require("discord.js");
const fs = require("fs");
const shark = require("../sharks.json");
let myArray = ["<:sparkles_blue:787846599430635552> Blue Shark",
"<:sparkles_blue:787846599430635552> Mako Shark",
"<:sparkles_fiery:787846722121498635> Tiger Shark",
"<:sparkles_light:787846194005147658> Whale Shark",
"<:sparkles_light:787846194005147658> Mud Shark",
"<:sparkles_blue:787846599430635552> Lemon Shark",
"<:sparkles_green:787846876258762784> Frilled Shark",
"<:sparkles_fiery:787846722121498635> Goblin Shark",
"<:sparkles_fiery:787846722121498635> Thrasher Shark",
"<:sparkles_green:787846876258762784> Cookiecutter Shark",
"<:sparkles_light:787846194005147658> Zebra Shark",
"<:sparkles_light:787846194005147658> Nurse Shark", 
"<:sparkles_fiery:787846722121498635> Bull Shark",
"<:sparkles_blue:787846599430635552> Saw Shark",
"<:sparkles_light:787846194005147658> Horn Shark",
"<:sparkles_green:787846876258762784> Greenland Shark",
"<:sparkles_light:787846194005147658> Porbeagle Shark",
"<:sparkles_blue:787846599430635552> Sleeper Shark",
"<:sparkles_blue:787846599430635552> Sand Tiger Shark",
"<:sparkles_green:787846876258762784> Megamouth Shark",
"<:sparkles_green:787846876258762784> Anvil Shark",
"<:sparkles_green:787846876258762784> Greenland Shark",
"<:sparkles_fiery:787846722121498635> Scissortooth Shark"



];

module.exports.run = async (bot, message, args) => {

    if(!args[0]) {
        var randomSpecies = myArray[Math.floor(Math.random()*myArray.length)];
        var user = message.author;
    } else {
        var user = message.mentions.user.first() || bot.users.cache.get(args[0]);
    }

    if(!shark[user.id]) {


        shark[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            shark: (randomSpecies),
            hunger: 100,

            

        }
        fs.writeFile("./sharks.json", JSON.stringify(shark), (err) => {
            if(err) console.log(err);
            
        });

        
    }

    return message.reply(`has a :shark: **${shark[user.id].shark}** as their companion!`);


}

module.exports.help = {
    name: "myshark",
    aliases: []
}