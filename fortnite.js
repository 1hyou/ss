const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    
    let platform;
    let username;
    

    if (!['pc','xbl','psn'].includes(args[0])) return message.channel.send('**Porfavor coloque a plataforma `!fortnite platform username`**' );
    
    if (!args[1]) return message.channel.send('**Porfavor coloque o nick da conta`!fortnite platform username`**');

    platform = args.shift();
    username = args.join(' ');
    

    fortnite.user(username, platform).then(console.log); data => {


        const embed = new Discord.MessageEmbed()
          .setColor(0xffffff)
          .setTitle(`Status para ${data.username}`)
          .addField('Score Total')
          .setColor(0xffffff)
          .setTitle(`Status para ${data.username}`)
          .addDescription('Top Placemant', `**Top 3s:** *${data.lifetimeStat[0].value}*\n**Top 5s:** *${data.lifetimeStats[1].value}*\n**Top 6s:** *${data.lifetimeStats[3].value}*\n**Top 12s:** *${data.lifetimeStats[4].value}*\n**Top 25s:** *${data.lifetimeStats[5].value}*`)
          .setThumbnail('https://cdn.discordapp.com/attachments/521155588852285444/532204383627247619/latest.png')
          .addField('Score Total', data.lifetimeStats[6].value, true)
          .addField('Partidas Jogadas', data.lifetimeStats[7].value, true)
          .addField('Vitorias', data.lifetimeStats[8].value, true)
          .addField('Porcentagem de Vitoria', data.lifetimeStats[9].value, true)
          .addField('Kills', data.lifetimeStats[10].value, true)
          .addField('K/D Ratio', data.lifetimeStats[11].value, true)
          .addField('Kills Por Minuto', data.lifetimeStats[12].value, true)
          .addField('Tempo Jogando', data.lifetimeStats[13].value, true)
          .addField('Tempo De Sobrevivencia Aproximado', data.lifetimeStats[14].value, true)


          message.channel.send(embed)
          
       .catch(error => {
           message.channel.send('Usuario inexistente')
       })

    }

}