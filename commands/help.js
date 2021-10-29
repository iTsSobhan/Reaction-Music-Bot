const { MessageEmbed } = require("discord.js");
const { support_server } = require("../config.json");
const { LOCALE } = require("../util/AdUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "help",
  aliases: ["h"],
  description: i18n.__("help.description"),
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setAuthor(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      .setTitle(i18n.__mf("help.embedTitle", { botname: message.client.user.username }))
      .setThumbnail(message.client.user.displayAvatarURL({ format: "png" }))
      .setDescription(i18n.__("help.embedDescription"))
      .setColor("RANDOM")
      .setFooter(`To get info of each command you can do ${message.client.prefix}help | Create by Sobhan.SRZA#2153 :)`);
    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name}**`,
        `${cmd.description} | Aliases: (${cmd.aliases ? `${cmd.aliases}` : ""})`,
        true
      );
    });
    helpEmbed.addField(`**Links**`, `**[Support Server](${support_server || "https://discord.gg/4pUbjscCmA"}) • [Invite](https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=412353895745&scope=bot)**`)


    return message.channel.send(helpEmbed).catch(console.error);
  }
};
