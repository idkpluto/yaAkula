const Discord = require("discord.js");
const shark = require("../sharks.json");
const money = require("../money.json");
const fs = require("fs");
const { parse } = require("path");
const common = ["Zebra","Whale","Nurse","Mud","Horn","Porbeagle"];
const rare = ["Blue", "Mako","Saw","Sand","Sleeper"];
const strange = ["Frilled", "Cookiecutter","Greenland","Anvil","Megamouth"];
const mystic =["Tiger","Goblin","Thrasher","Bull","Scissortooth"];
const arcane = ["Hammerhead","Great","Buzzsaw"];
const apex = ["Megalodon","Mustang"];
const forbidden = ["Blood","Lusca","Zamtrios","Zombie","Twoheaded","Dragon"];
const Allsharks = ["Zebra","Whale","Nurse","Mud","Horn","Blue", "Mako","Saw","Frilled", "Cookiecutter","Greenland","Tiger","Goblin","Thrasher","Bull","Hammerhead","Great","Scissortooth","Megalodon","Buzzsaw","Lusca","Zamtrios","Zombie","Twoheaded","Shadow","Blood","Dragon","Mustang"]
const zoo = require("../zoo.json");


const tier = ["<:sparkles_black:787849447618510858> "];

module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.reply("Please specify a valid shark to adopt.");

    console.log(args);
    let commonans = (common.includes(args[0]))?true:false
    let rareans = (rare.includes(args[0]))?true:false
    let strangeans = (strange.includes(args[0]))?true:false
    let mysticans = (mystic.includes(args[0]))?true:false
    let arcaneans = (arcane.includes(args[0]))?true:false
    let apexans = (apex.includes(args[0]))?true:false
    let forbiddenans = (forbidden.includes(args[0]))?true:false
    //console.log(ans)


if(commonans === true && money[message.author.id].money >= 500000)  {

    

    const tier = ["<:sparkles_light:787846194005147658> "];
    money[message.author.id].money -= 500000
    if(Allsharks.includes(args[0])) {


    zoo[message.author.id] = {

        zoo: (shark[message.author.id].shark),

    

    }

    fs.writeFile("./zoo.json", JSON.stringify(zoo), (err) => {
        if(err) console.log(err);
    
});


}


    fs.writeFile("./money.json", JSON.stringify(money), (err) => {
        if(err) console.log(err);


    })
   
        


const sharkVariant = args[0];

if(!args[0]) return message.reply("Please specify a valid shark to adopt.");


if(Allsharks.includes(args[0])) {

    var user = message.author;
shark[message.author.id].shark = tier + sharkVariant + " Shark"

    

fs.writeFile("./sharks.json", 
JSON.stringify(shark), (err) => {
    if(err) console.log(err);
    return message.reply(`You have received a **${shark[message.author.id].shark}** succesfully! You now have **︽${money[message.author.id].money}!**`);

}) 
}












} else if (rareans === true && money[message.author.id].money >= 1000000) {

    const tier = ["<:sparkles_blue:787846599430635552> "];
    money[message.author.id].money -= 1000000

    fs.writeFile("./money.json", JSON.stringify(money), (err) => {
        if(err) console.log(err);
    })

    const sharkVariant = args[0];

if(!args[0]) return message.reply("Please specify a valid shark to adopt.");

if(Allsharks.includes(args[0])) {

shark[message.author.id].shark = tier + sharkVariant + " Shark"

fs.writeFile("./sharks.json", JSON.stringify(shark), (err) => {
    if(err) console.log(err);
    return message.reply(`You have received a **${shark[message.author.id].shark}** succesfully! You now have **︽${money[message.author.id].money}!**`);
});
}
} else if (strangeans === true && money[message.author.id].money >= 3000000) {

    const tier = ["<:sparkles_green:787846876258762784>"];
    money[message.author.id].money -= 3000000

    fs.writeFile("./money.json", JSON.stringify(money), (err) => {
        if(err) console.log(err);


    })
    const sharkVariant = args[0];

if(!args[0]) return message.reply("Please specify a valid shark to adopt.");

if(Allsharks.includes(args[0])) {

shark[message.author.id].shark = tier + sharkVariant + " Shark"

fs.writeFile("./sharks.json", JSON.stringify(shark), (err) => {
    if(err) console.log(err);
    return message.reply(`You have received a **${shark[message.author.id].shark}** succesfully! You now have **︽${money[message.author.id].money}!**`);
});
}

} else if(mysticans === true && money[message.author.id].money >= 5000000) {

    const tier = ["<:sparkles_fiery:787846722121498635> "];
    money[message.author.id].money -= 5000000

    fs.writeFile("./money.json", JSON.stringify(money), (err) => {
        if(err) console.log(err);


    })
    const sharkVariant = args[0];

if(!args[0]) return message.reply("Please specify a valid shark to adopt.");

if(Allsharks.includes(args[0])) {

shark[message.author.id].shark = tier + sharkVariant + " Shark"

fs.writeFile("./sharks.json", JSON.stringify(shark), (err) => {
    if(err) console.log(err);
    return message.reply(`You have received a **${shark[message.author.id].shark}** succesfully! You now have **︽${money[message.author.id].money}!**`);
});
}
} else if(arcaneans === true && money[message.author.id].money >= 6000000) {

    const tier = ["<:sparkles_red:787846781060251658> "];
    money[message.author.id].money -= 6000000

    fs.writeFile("./money.json", JSON.stringify(money), (err) => {
        if(err) console.log(err);


    })
    const sharkVariant = args[0];

if(!args[0]) return message.reply("Please specify a valid shark to adopt.");

if(Allsharks.includes(args[0])) {

shark[message.author.id].shark = tier + sharkVariant + " Shark"

fs.writeFile("./sharks.json", JSON.stringify(shark), (err) => {
    if(err) console.log(err);

    return message.reply(`You have received a **${shark[message.author.id].shark}** succesfully! You now have **︽${money[message.author.id].money}!**`);
});
}
} else if(apexans === true && money[message.author.id].money >= 8000000) {

    const tier = ["<:sparkles_silver:789509208243830814> "];
    money[message.author.id].money -= 8000000

    fs.writeFile("./money.json", JSON.stringify(money), (err) => {
        if(err) console.log(err);


    })
    const sharkVariant = args[0];

if(!args[0]) return message.reply("Please specify a valid shark to adopt.");

if(Allsharks.includes(args[0])) {

shark[message.author.id].shark = tier + sharkVariant + " Shark"

fs.writeFile("./sharks.json", JSON.stringify(shark), (err) => {
    if(err) console.log(err);

    return message.reply(`You have received a **${shark[message.author.id].shark}** succesfully! You now have **︽${money[message.author.id].money}!**`);
});
} 


if(commonans === true && money[message.author.id].money < 500000) {
    message.reply("You lack the sufficient funds to make this swap.")
} else if (rareans === true && money[message.author.id].money < 1000000) {
    message.reply("You lack the sufficient funds to make this swap.")
} else if (strangeans === true && money[message.author.id].money < 3000000) {
    message.reply("You lack the sufficient funds to make this swap.")
} else if (mysticans === true && money[message.author.id].money < 5000000) {
    message.reply("You lack the sufficient funds to make this swap.")
}else if (arcaneans === true && money[message.author.id].money < 6000000) {
    message.reply("You lack the sufficient funds to make this swap.")
}else if (apexans === true && money[message.author.id].money < 8000000) {
    message.reply("You lack the sufficient funds to make this swap.")
}else if (forbiddenans === true && money[message.author.id].money < 10000000) {
    message.reply("You lack the sufficient funds to make this swap.")
}




} else if(forbiddenans === true && money[message.author.id].money >= 10000000) {

    const tier = ["<:sparkles_black:787849447618510858> "];
    money[message.author.id].money -= 10000000

    fs.writeFile("./money.json", JSON.stringify(money), (err) => {
        if(err) console.log(err);


    })
    const sharkVariant = args[0];

if(!args[0]) return message.reply("Please specify a valid shark to adopt.");

if(Allsharks.includes(args[0])) {

shark[message.author.id].shark = tier + sharkVariant + " Shark"

fs.writeFile("./sharks.json", JSON.stringify(shark), (err) => {
    if(err) console.log(err);

    return message.reply(`You have received a **${shark[message.author.id].shark}** succesfully! You now have **︽${money[message.author.id].money}!**`);
});

}
}
}


module.exports.help = {
    name: "sharkswap",
    aliases: ["swapshark"]
}