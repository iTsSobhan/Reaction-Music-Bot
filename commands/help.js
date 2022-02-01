const { MessageEmbed } = require("discord.js");
const { support_server } = require("../config.json");
const { LOCALE, PREFIX } = require("../util/AdUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "help",
  aliases: ["h"],
  description: i18n.__("help.description"),
async  execute(message) {
    let commands = message.client.commands.array();

      const db = require("quick.db");
    var prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`)|| PREFIX;
    
    let helpEmbed = new MessageEmbed()
      .setAuthor(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user.username }))
      .setThumbnail(message.client.user.displayAvatarURL({ format: "png" }))
      .setDescription(i18n.__("help.embedDescription"))
      .setColor("RANDOM")
      helpEmbed.addField(`**Links**`, `**[Support Server](${support_server || "https://discord.gg/5GYNec4urW"}) • [Invite](https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=412353895745&scope=bot)**`,false)

      .setFooter(`To get info of each command you can do ${prefix}help | Create by Mr.SIN RE#1528 :)`);
    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${prefix}${cmd.name}**`,
        `\`Description: ${cmd.description} | Aliases: (${cmd.aliases ? `${cmd.aliases}` : ""})\``,
        true
      );
    });


    return message.channel.send(helpEmbed).catch(console.error);
  }
};
