 //comando falar
 if(comando === "falar") { 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
    message.channel.send(sayMessage);
  }
//comando apagar
  if(comando === "apagar" || comando === "limpar") {
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Por favor, forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));
  }
  // comando chutar 
  if(comando === "kick") {
//adicione o nome dos cargos que vc quer que use esse comando!
if(!message.member.roles.some(r=>["Staff", "β Ø Ŧ"].includes(r.name)) )
return message.reply("Você não tem permissão para usar este comando!");

//consulta se o user existe
// message.mentions.members representa os users mencionados
let member = message.mentions.members.first();
if(!member)
return message.reply("Plz, Informe um usuário válido");
if(!member.kickable) 
return message.reply("Você não possui permissões suficientes para kickar este usuário.");

//slice(1) remove a primeira parte (nome do usuário) 
let reason = args.slice(1).join(' ');
if(!reason)
return message.reply("Qual o motivo do Kick?");

//Executa o kick!
await member.kick(reason)
.catch(error => message.reply(`Sry ${message.author} , impossivel executar o kick devido ao erro: ${error}`));
message.reply(`${member.user.tag} Foi Kickado por ${message.author.tag} .Motivo: ${reason}`);    
}