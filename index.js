const Discord = require("discord.js");
const fs = require("fs");
const axios = require("axios");
const config = require("./config.json");

const client = new Discord.Client();
client.commands = new Discord.Collection();
const activeSongs = new Map();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  console.log(`${file} loaded.`);

  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log(`${client.user.username} has started up!`);
});

client.on("message", (message) => {
  const prefix = config.prefix;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  var options = {
    active:  activeSongs,
  }

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  if (command.args && !args.length) {
    return message.channel.send(
      `You did not provide any arguments, ${message.author}!`
    );
  }

  if (command.guildOnly && message.channel.type === "dm") {
    return message.reply("You can't use this command through DM!");
  }

  try {
    command.execute(message, args, client, options);
  } catch (error) {
    console.error(error);
    message.reply("There was an error trying to execute that command...");
  }
});

client.login(config.token);
