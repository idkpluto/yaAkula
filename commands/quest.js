


module.exports.run = async (bot, message, args) => {
    db.add('times.ping', 1); // Adding an amount of one to the countor for the ping command

    const timesUsed = db.get('times.ping'); // Getting the amount of uses 

    message.reply('pong!');
    message.channel.send('This command has been used '+timesUsed+' times!');

}

module.exports.help = {
    name: "quest",
    aliases: []
}