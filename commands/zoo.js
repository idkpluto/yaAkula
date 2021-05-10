const fs = require("fs");
const money = require("../money.json");
const inventory = require("../inventory.json");
const zoo = require("../zoo.json");

module.exports.run = async (bot, message, args) => {
    var user = message.author;

    return message.channel.send(`:shark: || **${bot.users.cache.get(user.id).username}**, currently has a **${zoo[user.id].zoo}** in their zoo!`);



}

module.exports.help = {
    name: "zoo",
    aliases: []
}