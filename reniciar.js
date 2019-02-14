const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    resetBot(message.channel);
    function resetBot(channel) {
        message.react('✅')
            .then(message => client.destroy())
            .then(() => client.login("NTE4Nzg0NzM1NjY1OTc5Mzk0.DuVzyg.-Eno93nNE6CHDpJvz-yWACXZlQc"));
}
}