const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    
    //aqui voce coloca o krl de respostas que voce quiser :P
    
      let replies = ["Você morreu!", "Você sobreviveu!", "Você levou um tiro de raspão!", "Você saiu ileso!"]
      
      let result = Math.floor((Math.random() * replies.length));
      
      let dadoembed = new Discord.RichEmbed()
      .setFooter(message.author.tag, message.author.displayAvatarURL)
      .setThumbnail(message.author.avatarURL)
      .setColor('RANDOM')
      .addField("O que será que aconteceu?", replies[result])
      
      message.channel.send(dadoembed); 
    }