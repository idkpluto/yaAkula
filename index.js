const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone:true});
const botconfig = require("./botconfig.json");
const fs = require("fs");
const leveling = require('discord-leveling');

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);
    
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0) {
        console.log("couldn't find stephs wifi! aka commands!");
        return;
    }

    jsfile.forEach((f) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        })
    })
})

bot.on('ready', async () =>{

    console.log('shark attack!');
    bot.user.setActivity('with all the fishies!');
})

bot.on("message", async message => {

    if(message.channel.type === "dm") return;
    if(message.author.bot) return;

    let prefix = botconfig.prefix;

    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd;
    cmd = args.shift().toLowerCase();
    let command;
    let commandfile =bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot, message, args);

    let profile = await leveling.Fetch(message.author.id);
    leveling.AddXp(message.author.id, 15);

    if(profile.xp + 15 > 150){
        leveling.AddLevel(message.author.id, 1);
        leveling.SetXp(message.author.id, 0)
        message.channel.send(`:cyclone: || Congratulations **${message.author.username}**, you have just advanced to level **${profile.level + 1}!**`)
    }

    // pew pew i am pew
    if(bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else if (bot.aliases.has(cmd)){
        command = bot.commands.get(bot.aliases.get(cmd));
    }
    try {
        command.run(bot, message, args);
    } catch (e) {
        return;
    }
    
})

bot.login(botconfig.token);
