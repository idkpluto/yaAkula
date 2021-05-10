const money = require("../money.json");
const fs = require("fs");


module.exports.run = async (bot, message, args) => {

    let user = message.mentions.members.first() || bot.users.cache.get(args[0]);
    if(!user) return message.reply("Please specify a valid user");

    if(!args[1]) return message.reply("Please specify the amount you want to pay");

    if(!money[message.author.id]) return message.reply("Sorry you are poor and lack sufficient funds");

    if(parseInt(args[1]) > money[message.author.id].money) return message.reply("You do not have that much money");
    if(parseInt(args[1]) < 1) return message.reply("You cannot pay less then 1$");

    if(!money[user.id]) {

        money[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            money: parseInt(args[1])
        }

        money[message.author.id].money -= parseInt(args[1]);

        fs.writeFile("./money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);
        });

    } else {

        money[user.id].money += parseInt(args[1]);

        money[message.author.id].money -= parseInt(args[1]);

        fs.writeFile("./money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);
        });

    }

    return message.channel.send(`:moneybag: || **${message.author.username}** payed **︽${parseInt(args[1].toLocaleString())}** to **${bot.users.cache.get(user.id).username}**!`);


}

module.exports.help = {
    name: "pay",
    aliases: []
}