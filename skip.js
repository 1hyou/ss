const Discord = require("discord.js");
const ytdl = require("ytdl-core");
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
module.exports.run = (bot, message, args) => {
    //skip
    var server = servers[message.guild.id];
    if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
    if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
    serverQueue.connection.dispatcher.end('Skip command has been used!');
    return undefined;
}

module.exports.help = {
    name: "skip"
}