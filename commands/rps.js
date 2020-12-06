const Discord = require("discord.js");

module.exports = {
  name: "rps",
  description: "Gives the ping of the bot!",
  aliases: ["rockpaperscissors"],
  usage: "<rock/paper/scissors",
  execute(message, args) {
    if (!args[0])
      return message.channel.send(
        ":x: Wrong usage! !rps <rock/paper/scissors>"
      );

    var options = ["rock", "paper", "scissors"];

    var result = options[Math.floor(Math.random() * options.length)];

    if (args[0].toUpperCase() == "ROCK") {
      if (result == "paper") {
        return message.channel.send(
          `I have ${result} :notepad_spiral:, I won!`
        );
      } else if (result == "scissors") {
        return message.channel.send(`I have ${result} :scissors:, you won!`);
      } else if (result == "rock") {
        return message.channel.send(`I have ${result} :moyai:, it's a draw!`);
      }
    } else if (args[0].toUpperCase() == "PAPER") {
      if (result == "paper") {
        return message.channel.send(
          `I have ${result} :notepad_spiral:, it's a draw!`
        );
      } else if (result == "scissors") {
        return message.channel.send(`I have ${result} :scissors:, I won!`);
      } else if (result == "rock") {
        return message.channel.send(`I have ${result} :moyai:, you won!`);
      }
    } else if (args[0].toUpperCase() == "SCISSORS") {
      if (result == "paper") {
        return message.channel.send(
          `I have ${result} :notepad_spiral:, you won!`
        );
      } else if (result == "scissors") {
        return message.channel.send(
          `I have ${result} :scissors:, it's a draw!`
        );
      } else if (result == "rock") {
        return message.channel.send(`I have ${result} :moyai:, I won!`);
      }
    }
  },
};
