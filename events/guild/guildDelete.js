const {
    MessageEmbed
} = require('discord.js');
var clc = require("cli-color");
module.exports = async (client, guild) => {
    const channel = client.channels.cache.get(client.config.SATUS_CHANNEL_ID);
    const embed = new MessageEmbed()
    .setAuthor( client.user.tag,client.user.displayAvatarURL())
    embed.setDescription(` I left the server **${guild.name}** The number of servers I am currently joining is: \`${client.guilds.cache.size}\``)
    .addField(`👑| Owner Of Server: ` ,` lefted server owner tag: \` ${guild.owner.tag}\``,true)
    .addField(`📬| Server Invite Link: ` ,` lefted server invite link:  **Can't Create Invite Link**`,true)
    .addField(`🗿| Server ID: ` ,`lefted server id: \` ${guild.id}\``,true)
    .setColor("#2F3136")
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setTimestamp(Date.now())

    channel.send(embed)
}
/**
 * @INFO
 * Bot Coded by Mr.SIN RE#1528 :) | https://dsc.gg/sizar-team
 * @INFO
 * Work for SIZAR Team | https://dsc.gg/sizar-team
 * @INFO
 * Please Mention Us SIZAR Team, When Using This Code!
 * @INFO
 */