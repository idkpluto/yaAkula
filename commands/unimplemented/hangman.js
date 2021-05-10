const { hangman } = require('reconlx')

module.exports = {
    name : 'hangman',
    run : async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You need manage messages permission.')
        const channelId = message.channel.id
        //if(!channel) return message.channel.send('Please specify a channel')
        const word = args.slice(0).join(" ")
        if(!word) return  message.channel.send('Please specify a word to guess.')
        

        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channelId
        })
        hang.start();
        message.channel.bulkDelete(parseInt(1))

    }
}

module.exports.help = {
    name: "hangman",
    aliases: []
}