const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
    name: 'covid',
    aliases: ["corona", "virus"],
    description: 'Gives you the general numbers about the Covid virus.',
    execute(message, args) {

        const COVID_URL = "https://covid19.mathdro.id/api";

        axios.get(COVID_URL).then(({ data }) => {
            const info = {
              confirmed: data.confirmed.value,
              recovered: data.recovered.value,
              deaths: data.deaths.value,
            };
      
            const confirmedData = new Intl.NumberFormat("nl-CA").format(
              info.confirmed
            );

            const recoveredData = new Intl.NumberFormat("nl-CA").format(
              info.recovered
            );

            const deathsData = new Intl.NumberFormat("nl-CA").format(
              info.deaths
            );
      
            const summaryEmbed = new Discord.MessageEmbed()
            .setTitle('Global Covid-19 Summary')
            .setColor('#00ebdb')
            .setDescription(`Latest summary of the Covid-19 virus.`)
            .addField('**Confirmed Cases**', confirmedData + ' people')
            .addField('**Recovered Cases**', recoveredData + ' people')
            .addField('**Death Cases**', deathsData + ' people')
            .setFooter(`Last updated: ${new Date (data.lastUpdate).toDateString()}`)
            // .setImage('https://www.augenklinik.nl/fileadmin/_processed_/4/d/csm_ICON_Corona-Virus_7adfd31c25.png');
            .setThumbnail('https://www.augenklinik.nl/fileadmin/_processed_/4/d/csm_ICON_Corona-Virus_7adfd31c25.png');

            message.channel.send(summaryEmbed);
          });
    },
};