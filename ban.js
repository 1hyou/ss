const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  // comando ban
  
    //adicione o nome do cargo que vc quer que use esse comando!
    if(!message.member.roles.some(r=>["Staff"].includes(r.name)) )
      return message.reply("Desculpe, você não tem permissão para usar isto!");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Por favor mencione um membro válido deste servidor");
    if(!member.bannable) 
      return message.reply("Eu não posso banir este usuário! Eles pode ter um cargo mais alto ou eu não tenho permissões de banir?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nenhuma razão fornecida";
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o : ${error}`));
    message.reply(`${member.user.tag} https://tenor.com/view/dancing-girl-ban-banned-banear-gif-10306566 foi banido por ${message.author.tag} Motivo: ${reason}`);
}