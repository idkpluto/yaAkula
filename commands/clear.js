module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You cannot clear messages!");
    if(!args[0]) return message.reply("Please specify the amount of messages you would like to delete!");
    if(parseInt(args[0]) > 99) return message.reply("You cannot delete more than 99 messages at a time!")

    message.channel.bulkDelete(parseInt(args[0]) + 1).then(() => {
        //message.reply(`Cleared ${args[0]} messages! :shark:`);
    }).catch((err) => {
        return message.reply("An error has occured!");
    })


}

module.exports.help = {
    name: "clear",
    aliases: ["c"]
}