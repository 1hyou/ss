const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {


    let usuario = message.mentions.users.first();
    let gifs = ['https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943', 'https://media1.tenor.com/images/a0ff9e6e3f65b921d63dfffeec0b94a0/tenor.gif?itemid=7202047', 'https://media1.tenor.com/images/f619012e2ec268d73ecfb89af5a8fb51/tenor.gif?itemid=8562186', 'https://media1.tenor.com/images/fb17a25b86d80e55ceb5153f08e79385/tenor.gif?itemid=7919028']
    let alea = gifs[Math.floor(Math.random() * gifs.length)]
    let frase = [`**${message.author.tag}** deu um tapa em **${usuario.tag}**. Eu não deixava!`, `**${message.author.tag}** deu um tapão na cara de **${usuario.tag}**. As coisas estão esquentando!`, `**${message.author.tag}** estapeou com ira **${usuario.tag}**. Que pessoazinha violenta!`]
    let frases = frase[Math.floor(Math.random() * frase.length)]
    if(!usuario) return message.reply("Talvez você esteja cego ou seja muito burro, mencione alguém, entendeu?");

    let slapEmbed = new Discord.RichEmbed()
    .addField(frases)
    .setImage(alea)
    .setColor("#a612e4")
    message.channel.send(slapEmbed)
}