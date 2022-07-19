const {
    MessageEmbed
} = require('discord.js');
var clc = require("cli-color");
module.exports = async (client, guild) => {
    const channel = client.channels.cache.get(client.config.SATUS_CHANNEL_ID);
    const inviteCH = client.channels.cache.get(guild.rulesChannelID);
        let invite = await inviteCH.createInvite({
            maxAge: 0, 
            maxUses: 5
        }, )
    const embed = new MessageEmbed()
    .setAuthor( client.user.tag,client.user.displayAvatarURL())
    embed.setDescription(` I joined the server **${guild.name}** The number of servers I am currently joining is: \`${client.guilds.cache.size}\``)
    .addField(`👑| Owner Of Server: ` ,` joined server owner tag: \` ${guild.owner.tag}\``,true)
    .addField(`📬| Server Invite Link: ` ,` joined server invite link:  **${invite}**`,true)
    .addField(`🗿| Server ID: ` ,`joined server id: \` ${guild.id}\``,true)
    .setColor("#2F3136")
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setTimestamp(Date.now())

    channel.send(embed)
  if(guild.memberCount < 90&&!guild.id==="991109798709956668"){
  guild.owner.send("Hi I left on your server because the number of members of your server is less than 100")
  guild.leave()
}
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