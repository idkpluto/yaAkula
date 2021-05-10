module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! ${m.createdTimestamp - message.createdTimestamp}ms`)
    //message.channel.send("bitch im rich now thanks Lunar")

}

module.exports.help = {
    name: "ping",
    aliases: ["p"]
}