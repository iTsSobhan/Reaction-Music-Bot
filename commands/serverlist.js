const { canModifyQueue, LOCALE } = require("../util/AdUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "serverlist",
  aliases: ["sl"],
  description: i18n.__('list of all servers bot join'),
  execute(message,client) {
        const Guilds = client.guilds.cache.array().map((G, I) => `${I + 1}. **${G.name}** - **${G.id}**`).join("\n");
    if (!Guilds) return message.channel.send("No Guild");
    return message.channel.send(Guilds, { split: { char: "\n" } }); 
  }
}
