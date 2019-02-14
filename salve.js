const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed()
    .setEmbed(new EmbedBuilder()
    .setDescription("🔥Bem Vindo! Espero que goste de nosso servidor🔥\n👥Configura para melhor comunicação comunitaria👥")
    .setColor(new Color(16711680))
    .setTimestamp(OffsetDateTime.parse("2019-01-02T01:15:05.461Z"))
    .setFooter("footer text", "https://cdn.discordapp.com/embed/avatars/0.png")
    .setThumbnail("https://scontent.fbel1-1.fna.fbcdn.net/v/t1.0-9/49444744_236434433923621_8469530823148699648_n.jpg?_nc_cat=111&_nc_ht=scontent.fbel1-1.fna&oh=a93c5a0b8070b326dbec8e79bb26bc8b&oe=5CC252C3")
    .setImage("https://steamusercontent-a.akamaihd.net/ugc/92725318253366539/E532460679CEA88C1224E0C8142D8462B3EDB37D/")
    .setAuthor("🌹Neutron's🌹", "https://discordapp.com", null)
    .build())
  .build(); 

   message.channel.send(embed)
}