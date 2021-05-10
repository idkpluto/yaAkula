const { tictactoe } = require('reconlx')

module.exports.run = async (bot, message, args) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }

    module.exports.help = {
        name: "tictactoe",
        aliases: []
    }