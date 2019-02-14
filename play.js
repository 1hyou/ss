//play
const Discord = require("discord.js");
const YTDL = require("ytdl-core");
function play(connection, message) {
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, messsage);
        else connection.disconnect();
    })
}
var servers = {};
module.exports.run = (client, message, args) => {
    //play
    if (!args[0]) {
         message.reply("Coloque Um Link Especifico");
         return
    }
    
    if(!message.member.voiceChannel) {
        message.reply("Você Precisa Estar Em Um Canal De Voz!");
    }

    if(!servers[message.guild.id]) servers[message.guild.id] = {
        queue: []
    }
    var server = servers[message.guild.id];

    server.queue.push(args[0]);
    message.reply("Sua Musica Foi Adicionada Na Fila, !start Para Começar!")
    if(!message.member.voiceConnection) message.member.voiceChannel.join('').then(function(connection) {
        play(connection, message);
    })
}

module.exports.help = {
    name: "play"
}