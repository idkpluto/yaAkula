const Discord = require("discord.js");
const fs = require("fs");
const money = require("../money.json");
const ms = require("parse-ms");
const cooldowns = require("../cooldowns.json");


module.exports.run = async (bot, message, args) => {

    let timeout = 86400000;
    let reward = 3000;
    let embed = new Discord.MessageEmbed();
    embed.setTitle("Daily Reward!");

    if(!money[message.author.id]) {

        money[message.author.id].money += 100;
        fs.writeFile("./money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err); 

        });

        if(!cooldowns[message.author.id]) {

            cooldowns[message.author.id] = {
                name: bot.users.cache.get(message.author.id).tag,
                daily: Date.now()
            }
            fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
                if(err) console.log(err);
            });

        } else {
            cooldowns[message.author.id].daily = Date.now();
            fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
                if(err) console.log (err);
            });
        }

        embed.setDescription(`You have collected your daily reward of **︽${reward}**. You now have
        **︽${money[message.author.id].money.toLocaleString}.** To fully redeem your daily reward, hunt at least **once!**`);
        embed.setColor("D1EDF2");
        return message.channel.send(embed);

    } else {

        if(!cooldowns[message.author.id]) {
            cooldowns[message.author.id] = {
                name: bot.users.cache.get(message.author.id).tag,
                daily: Date.now()
            }
            fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
                if(err) console.log(err);
            });

            money[message.author.id].money += reward ;
            fs.writeFile("./cooldowns.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);
            });

            embed.setDescription(`You have collected your daily reward of **︽${reward}**. You now have
            ︽${money[message.author.id].money.toLocaleString}. To fully redeem your daily reward, hunt at least **once!**`);
            embed.setColor("D1EDF2");
            return message.channel.send(embed);

        } else {

            if(timeout - (Date.now() - cooldowns[message.author.id].daily) > 0) {
                
                let time = ms(timeout - (Date.now() - cooldowns[message.author.id].daily))

                embed.setColor("ff0000");
                embed.setDescription("**You already collected your daily!**")
                embed.addField(`Collect again in`, `**${time.hours}h ${time.minutes}m ${time.seconds}s`);
                return message.channel;

            } else {

                money[message.author.id].money += reward;
                fs.writeFile("./cooldowns.json", JSON.stringify(money), (err) => {
                if(err) console.log(err);
                });

                cooldowns[message.author.id].daily = Date.now();
                fs.writeFile("./cooldowns.json", JSON.stringify(cooldowns), (err) => {
                if(err) console.log (err);
                });

                embed.setDescription(`You have collected your daily reward of **︽${reward}**. You now have
                ︽${money[message.author.id].money}. To fully redeem your daily reward, hunt at least **once!**`);
                embed.setColor("D1EDF2");
                return message.channel.send(embed);


            }

        }


    }


}
    

module.exports.help = {
    name: "daily",
    aliases: ["d"]
}