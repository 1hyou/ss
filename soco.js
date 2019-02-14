const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
//comando de socar
let usuario = message.mentions.users.first();
let gifs = ['http://i.imgur.com/uni3hdF.gif', 'https://i.gifer.com/67d8.gif', 'https://media.giphy.com/media/1426DjQ2dTFkzK/giphy.gif', 'http://66.media.tumblr.com/7d58e35bef43e61530296224e619695f/tumblr_ogk36k1tT71son3fpo2_500.gif', 'https://media.giphy.com/media/B2EPZUJnvce3u/giphy.gif']
let alea = gifs[Math.floor(Math.random() * gifs.length)]
let frase = [`**${message.author.tag}** socou **${usuario.tag}**. O pau quebrando!`, `**${message.author.tag}** meteu o socão em **${usuario.tag}**. Vai deixar marca!`, `**${message.author.tag}** esmurrou **${usuario.tag}**. Briga, briga, briga!`]
let frases = frase[Math.floor(Math.random() * frase.length)]
if(!usuario) return message.reply("Talvez você esteja cego ou seja muito burro, mencione alguém, entendeu?");

let punchEmbed = new Discord.RichEmbed()
.addField(frases)
.setImage(alea)
.setColor("#a612e4")
message.channel.send(punchEmbed)
}