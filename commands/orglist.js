const Discord = require("discord.js");
const fs = require("fs");
const money = require("../money.json");
const shark = require("../sharks.json");
var version = "alpha0.1";

module.exports.run = async (bot, message, args) => {

    const me = new Discord.MessageEmbed()
    //.setTitle('ya!Akula Marine Wildlife Organisations')
    .addField('<:wwf:790420667652505610> World Wildlife Fund [000A]', "The World Wildlife Fund is another one of the world’s leading conservation organizations. It works in 100 countries and is supported by more than one million members in the United States and close to five million globally.")
    .addField('<:oceana:790421238178119730> Oceana [000B]', "Oceana is the largest organization in the world solely devoted to marine conservation, Oceana is involved in efforts to end major sources of ocean pollution such as oil, mercury, aquaculture and shipping emissions.")
    .addField('<:projectaware:790421197158088725> Project AWARE [000C]', "Focused on the critical issues of Shark Conservation and Marine Debris, Project AWARE empowers thousands to work together for a clean, healthy and abundant ocean planet.")  
    .addField('<:wildaid:790421162207215627> WildAid [000D]', "focuses on reducing the demand for wildlife products. WildAid works with media, governments, celebrities and local partners and communities worldwide to make wildlife conservation a global priority.")
    .addField('<:thesharktrust:790536710982860871> The Shark Trust [000E]', "Our mission is to safeguard the future of sharks through positive change. We achieve this through science, education, influence and action.")
    .addField('<:sharkadvocates:790536650538614804> Shark Advocates International [000F]', "Shark Advocates International (SAI) is dedicated to conserving some of the ocean's most vulnerable, valuable, and neglected animals – the sharks.")
    .addField('<:sharkalliance:790536693743616050> Shark Alliance [000G]', "founded in 2006 by Pew Charitable Trusts of non-governmental organizations dedicated to restoring and conserving shark populations by improving shark conservation policies.")
    .setFooter('type ya!invest [organisation code] [amount] to be affiliated and invest into one of these organisations!')
    .setColor(0x87CEEB)
    .setThumbnail('https://i.ytimg.com/vi/l4AI6T0-isc/maxresdefault.jpg')
    message.channel.send(me);


}

module.exports.help = {
    name: "organisationlist",
    aliases: ["orglist","allorgs"]
}