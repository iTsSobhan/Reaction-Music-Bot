const { LOCALE } = require("../util/AdUtil");
const i18n = require("i18n");
const { MessageEmbed } = require("discord.js");

i18n.setLocale(LOCALE);

module.exports = {
  name: "invite",
  description: i18n.__('invite.description'),
  execute(message, args) {
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 412353895745;

    let invite = new MessageEmbed()
      .setTitle(`**Ba Invite Bot Be Servert Azash Hemaiat Kon☺**`)
      .setDescription(
        `**Montazer chi hasti🤨? Bodo mano be servert add kon🙂😘** \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=412353895745&scope=bot)`
      )
      .setURL(`https://discord.gg/5GYNec4urW`)
      .setColor("RANDOM");
    return message.channel.send(invite);
  }
};
