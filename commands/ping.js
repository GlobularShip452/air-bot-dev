const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Gives the ping of the bot!',
    execute(message, args, client) {
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`)
    },
};