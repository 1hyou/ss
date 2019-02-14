const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  var canal = message.guild.channels.find('name', 'reports');
  let member = message.mentions.members.first() || message.guild.members.get(args[0]);
  if (!member)
      return message.reply("Usuário não encontrado.");
  let reason = args.slice(1).join(' ');
  if (!reason) reason = "Não informado.";
  let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL)
      .setTitle(`<a:usargif:496053335422664726> | Reportes `)
      .addField('Quem reportou:', message.author)
      .addField('\n\n Quem foi reportado:', member.user)
      .addField('\n\n Motivo:', reason)
      .setFooter(`Enviada por ${message.author.username}.`)
      .setTimestamp()
  canal.send(embed);
}
