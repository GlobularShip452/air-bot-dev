const Discord = require('discord.js');
const ytdl = require('ytdl-core');

module.exports = {
    name: 'leave',
    description: 'Lets you stop the music bot!',
    guildOnly: true,
    async execute(message, args, client) {
        
         
        if (!message.member.voice.channel) return message.channel.send('You need to be connected to a voice channel in order to play music!');

        if (!message.guild.me.voice.channel) return message.channel.send('Oops, Im not playing any music currently.');

        if (message.guild.me.voice.channelID != message.member.voice.channelID) return message.channel.send('Oops, you are not connected with the same channel.');

        message.guild.me.voice.channel.leave();

        message.channel.send('I left the voice channel. Thanks for listening :notes:!')

    },
};