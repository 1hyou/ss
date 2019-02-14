const Discord = require('discord.js');


exports.run = (client, message, args, tools) => {
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.author;

    /* Creating the embed */
    let embed = new Discord.RichEmbed() 
        .setTitle(member.tag + '\' avatar')
        .setImage(member.avatarURL);
    
    /* Sending the embed */
    message.channel.send({embed})
}