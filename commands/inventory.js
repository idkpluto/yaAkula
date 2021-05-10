const fs = require("fs");
const money = require("../money.json");
const inventory = require("../inventory.json");

module.exports.run = async (bot, message, args) => {
    var user = message.author;

    return message.channel.send(`:gem: | **${bot.users.cache.get(user.id).username}**, currently has a **${inventory[user.id].gem}**!`);



}

module.exports.help = {
    name: "gem",
    aliases: []
}