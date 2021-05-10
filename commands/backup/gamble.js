const Discord = require("discord.js");
const money = require("../money.json");
const shark = require("../sharks.json");
const hunger = require("../sharks.json");
const inventory = require("../inventory.json");
const talkedRecently = new Set();
const fs = require("fs");


module.exports.run = async (bot, message, args) => {

    var user = message.author;


    if(!shark[message.author.id]) return message.reply("Please adopt a shark first!");

    if(!hunger[message.author.id] || hunger[message.author.id].hunger <= 20) return message.reply("Your shark is too hungry to hunt!");

    if(!money[message.author.id] || money[message.author.id].money <= 0) return message.reply("you don't have any money.");

    if(!args[0]) return message.reply("please specify a valid bet.");

    try {
        var bet = parseFloat(args[0]);
    } catch {
        return message.reply("you can only enter whole numbers.")

    }

    if(bet != Math.floor(bet)) return message.reply("You can only enter whole numbers.")

    if(money[message.author.id].money < bet) return message.reply("you don't have enough money.");

    if(encounters = "Forbidden Landshark") {
        var user = message.mentions.user.first() || bot.users.cache.get(args[0]);
    }

    if(!inventory[user.id]) {


        inventory[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            item: "Shark Tooth",
            value: 1000,

            

        }
        fs.writeFile("./inventory.json", JSON.stringify(inventory), (err) => {
            if(err) console.log(err);
            
        });

        return message.reply(`has received a Shark Tooth! It has been added to their inventory!`);
    }

    

    

    //if(bet > maxBet) return message.reply(`the maximum bet is ${maxBet.toLocalestring()}.`);

    let chances = ["win", "lose"];
    var pick = chances[Math.floor(Math.random() * chances.length)];
    let encounters = [
    "Shark Attack","Shark Attack","Shark Attack","Shark Attack","Shark Attack",
    "Remoras","Remoras","Remoras","Remoras","Remoras",
    "Pollution","Pollution","Pollution","Pollution","Pollution",
    "Electroreception","Electroreception","Electroreception","Electroreception","Electroreception",
    "BloodSense", "BloodSense", "BloodSense", "BloodSense",
    "Shark Attack","Shark Attack","Shark Attack","Shark Attack","Shark Attack",
    "Remoras","Remoras","Remoras","Remoras","Remoras",
    "Pollution","Pollution","Pollution","Pollution","Pollution",
    "Electroreception","Electroreception","Electroreception","Electroreception","Electroreception",
    "BloodSense", "BloodSense", "BloodSense", "BloodSense",
    "Shark Attack","Shark Attack","Shark Attack","Shark Attack","Shark Attack",
    "Remoras","Remoras","Remoras","Remoras","Remoras",
    "Pollution","Pollution","Pollution","Pollution","Pollution",
    "Electroreception","Electroreception","Electroreception","Electroreception","Electroreception",
    "BloodSense", "BloodSense", "BloodSense", "BloodSense",
    "Collaborate","Collaborate","Collaborate","Collaborate","Collaborate",
    "Collaborate","Collaborate","Collaborate","Collaborate","Collaborate",
    "Plan","Plan","Plan","Plan","Plan",
    "Plan","Plan","Plan","Plan","Plan",
    "null","null","null","null","null","null","null","null","null","null",//1
    "null","null","null","null","null","null","null","null","null","null",//2
    "null","null","null","null","null","null","null","null","null","null",//3
    "null","null","null","null","null","null","null","null","null","null",//4
    "null","null","null","null","null","null","null","null","null","null",//5
    "null","null","null","null","null","null","null","null","null","null",//6
    "null","null","null","null","null","null","null","null","null","null",//7
    "null","null","null","null","null","null","null","null","null","null",//8
    "null","null","null","null","null","null","null","null","null","null",//9
    "null","null","null","null","null","null","null","null","null","null",//10
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
    "null","null","null","null","null","null","null","null","null","null",
  



    "Forbidden Megalodon","Forbidden Lusca","Forbidden Landshark"]
    var pickEncounters = encounters[Math.floor(Math.random() * encounters.length)];


    if(pick == "lose") {
        const m = await message.channel.send(`Your **${shark[user.id].shark}** begins the hunt... :shark: `);

        if(pickEncounters == "Shark Attack") {
            message.channel.send(`Your **${shark[user.id].shark}** encounters a <:sparkles_green:787846876258762784> **Cookiecutter Shark!**`);
            message.channel.send(`Your **${shark[user.id].shark}** becomes mildly injured! *(-5% Chance of Winning)*`)
        }

        if(pickEncounters == "Remoras") {
            message.channel.send(`<:sparkles_light:787846194005147658> **Remoras** encircle your **${shark[user.id].shark}**! *(+5% chance of Winning)*`)
        }

        if(pickEncounters == "Pollution") {
            message.channel.send(`Your **${shark[user.id].shark}** became entangled in plastic debris! *(-3% chance of Winning)*`)
        }

        if(pickEncounters == "Electroreception") {
            message.channel.send(`Your **${shark[user.id].shark}**'s electroreception hones in on their target! *(+3% chance of Winning)*`)
        }

        if(pickEncounters == "BloodSense") {
            message.channel.send(`Your **${shark[user.id].shark}** keen sense of smell picks up on the blood of its prey! *(+1.5% chance of Winning)*`)
        }

        if(pickEncounters == "Forbidden Megalodon") {
            message.channel.send(`Your **${shark[user.id].shark}** has discovered an ancient fossil (Complete Skeleton) belonging to a **Forbidden Shark**!! *(3/3 Forbidden Fossils)*`) //Rania//steph
        }

        if(pickEncounters == "Forbidden Lusca") {
            message.channel.send(`Your **${shark[user.id].shark}** has discovered an ancient fossil (Odd Tentacle) belonging to a **Forbidden Shark**!! *(1/3 Forbidden Fossils)*`)
        }

        if(pickEncounters == "Forbidden Landshark") {
            message.channel.send(`Your **${shark[user.id].shark}** has discovered an ancient fossil (Unknown Pectoral Fin) belonging to a **Forbidden Shark**!! *(1/3 Forbidden Fossils)*`)
        }



        money[message.author.id].money -= bet + bet;
        fs.writeFile("./money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);

        });
        return setTimeout(() => {  
            m.edit(`and they *lost.* :broken_heart: || **${message.author.username}** now has **︽${money[message.author.id].money}!**`); }, 2000);
        
    } else {
        
        const m = await message.channel.send(`Your **${shark[user.id].shark}** begins the hunt... :shark: `);

        if(pickEncounters == "Shark Attack") {
            message.channel.send(`Your **${shark[user.id].shark}** encounters a <:sparkles_green:787846876258762784> **Cookiecutter Shark!**`);
            message.channel.send(`Your **${shark[user.id].shark}** becomes mildly injured! *(-5% Chance of Winning)*`)
        }

        if(pickEncounters == "Remoras") {
            message.channel.send(`<:sparkles_light:787846194005147658> **Remoras** encircle your **${shark[user.id].shark}**! *(+5% chance of Winning)*`)
        }

        if(pickEncounters == "Pollution") {
            message.channel.send(`Your **${shark[user.id].shark}** became entangled in plastic debris! *(-3% chance of Winning)*`)
        }

        if(pickEncounters == "Electroreception") {
            message.channel.send(`Your **${shark[user.id].shark}**'s electroreception hones in on their target! *(+3% chance of Winning)*`)
        }

        if(pickEncounters == "BloodSense") {
            message.channel.send(`Your **${shark[user.id].shark}** keen sense of smell picks up on the blood of its prey! *(+1.5% chance of Winning)*`)
        }

        if(pickEncounters == "Collaborate") {
            message.channel.send(`Your **${shark[user.id].shark}** decides to join forces with another **${shark[user.id].shark}** in the hunt! *(+99% chance of Winning)*`)
        }

        if(pickEncounters == "Plan") {
            message.channel.send(`Your **${shark[user.id].shark}** sends its pack of <:sparkles_light:787846194005147658> **Remoras** to engage the enemy! *(+99% chance of Winning)*`)
        }

        money[message.author.id].money += bet + bet;
        fs.writeFile("./money.json", JSON.stringify(money), (err) => {
            if(err) console.log(err);
        });
        return setTimeout(() => {  
            m.edit(`and they *won!* :coin: || **${message.author.username}** now has **︽${money[message.author.id].money}!**`); }, 2000);

    }   
    
    

}


module.exports.help = {
    name: "gamble",
    aliases: ["hunt"]
}