const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

  if (args[0] === undefined) {

    const embed = new Discord.RichEmbed()
    .setColor("FFFFFF")
    .setDescription("**Provide a language and some text for bot to translate.**\nUsage: `PREFIXX translate <language> <text>`");

    return message.channel.send(embed);

  } else {

    if (args[1] === undefined) {

      return message.channel.send('**Please give me something to translate.** `PREFIX translate <language> <text>`');

    } else {

      let transArg = args[0].toLowerCase();

      args = args.join(' ')
      let translation;

      if (!Langs.includes(transArg)) return message.channel.send(`**Language not found.**`);
      args = args.slice(transArg.length);

      translate(args, {to: transArg}).then(res => {

        const embed = new Discord.RichEmbed()
        .setDescription(res.text)
        .setFooter(`english -> ${transArg}`)
        .setColor(`RANDOM`);
        return message.channel.send(embed);

      });

    }

  }

}

module.exports.help = {
  name: "translate"
}