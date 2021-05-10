const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
 
    randomPuppy()
        .then(url => {
            message.channel.send(url);
        })
    }

    module.exports.help = {
        name: "meme",
        aliases: []
    }

