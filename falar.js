const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    // COMANDO PARA O BOT FALAR OU ANUNCIAR.

    let botmesssage = args.join(" ")
    message.delete().catch()
    message.channel.send(botmesssage)
}
