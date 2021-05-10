const money = require("../money.json");
const fs = require("fs");
const organisations = ["000A","000B","000C","000D","000E","000F","000G"];
const investment = require("../investments.json");
const organisation = require("../organisations.json");


module.exports.run = async (bot, message, args) => {

    var previousAffiliation = "why"

    var currentOrganisation = "what"

    let organisationAns = (organisations.includes(args[0]))?true:false

    //if(!investment[message.author.id].investment) return message.reply("Please create a profile with ya!me before attempting an investment.")

    if(investment[message.author.id].investment >= 1) return message.reply("You have already submitted an investment. If you would like to add to your investments please consider using ya!investmore.")

    if(organisationAns == false) return message.reply("Please mention a valid organisation code.");

    if(!args[1]) return message.reply("Please specify the amount you would like to invest.");

    if(!money[message.author.id]) return message.reply("You do not possess any funds to invest.");

    if(parseInt(args[1]) > money[message.author.id].money) return message.reply("You do not have that much money.");
    if(parseInt(args[1]) < 1) return message.reply("You cannot invest less then 1$.");

    if(organisation[message.author.id].organisation == "The World Wildlife Fund") {
        previousAffiliation = "000A"
    } else if (organisation[message.author.id].organisation == "Oceana") {
        previousAffiliation = "000B"
    } else if(organisation[message.author.id].organisation == "Project AWARE") {
        previousAffiliation = "000C"
    } else if(organisation[message.author.id].organisation == "WildAid") {
        previousAffiliation = "000D"
    } else if(organisation[message.author.id].organisation == "The Shark Trust") {
        previousAffiliation = "000E"
    }else if(organisation[message.author.id].organisation == "Shark Advocates International") {
        previousAffiliation = "000F"
    }else if(organisation[message.author.id].organisation == "Shark Alliance") {
        previousAffiliation = "000G"
    }
    

    

  

    if(args[0] == "000A") {
        currentOrganisation = "<:wwf:790420667652505610> The World Wildlife Fund"
    } else if(args[0] == "000B"){
        currentOrganisation = "<:oceana:790421238178119730> Oceana"
    } else if(args[0] == "000C"){
        currentOrganisation = "<:projectaware:790421197158088725> Project AWARE"
    } else if(args[0] == "000D"){
        currentOrganisation = "<:wildaid:790421162207215627> WildAid"
    } else if(args[0] == "000E"){
        currentOrganisation = "<:thesharktrust:790536710982860871> The Shark Trust"
    } else if(args[0] == "000F"){
        currentOrganisation = "<:sharkadvocates:790536650538614804> Shark Advocates International"
    } else if(args[0] == "000G"){
        currentOrganisation = "<:sharkalliance:790536693743616050> Shark Alliance"
    } else {
        return;
    }

    

    if(args[0] != previousAffiliation) {
        investment[message.author.id].investment = parseInt(0);
    } else {
        return;
    }

    if(organisationAns == true) {


        investment[message.author.id].investment += parseInt(args[1]);

        fs.writeFile("./investments.json", JSON.stringify(investment), (err) => {
            if(err) console.log(err);
        });

    }

    if(organisationAns == true) {

        organisation[message.author.id] = {

            name: bot.users.cache.get(message.author.id).tag,
            organisation: (currentOrganisation),

        }

        //money[message.author.id].money -= parseInt(args[1]);

        fs.writeFile("./organisations.json", JSON.stringify(organisation), (err) => {
            if(err) console.log(err);
        })

    }

    

    return message.channel.send(`:earth_asia:  || **${message.author.username}** has invested **︽${args[1].toLocaleString()}** into **${currentOrganisation}**!`);


}

module.exports.help = {
    name: "invest",
    aliases: []
}