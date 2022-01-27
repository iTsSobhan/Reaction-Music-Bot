const Discord = require("discord.js");
const client = new Discord.Client();
const { LOCALE } = require("../util/AdUtil");
const i18n = require("i18n");
i18n.setLocale(LOCALE);
module.exports = {
    name: 'report',
    cooldown: 10,
    aliases: ['bug','rp'],
    description: 'for report bot bugs to developers :)',

async execute(message, args){ 
     // const sizarTMserver = client.guilds.cache.get("912598706405146665");
     // const channelbug = sizarTMserver.channels.cache.get('929205990790950982')
      const channelbug = ['929205990790950982'];
        let invite = await message.channel.createInvite({
            maxAge: 10 * 60 * 1000,
            maxUses: 5
        }, )

      const soal = new Discord.MessageEmbed()
        .setAuthor(message.client.user.tag,message.client.user.displayAvatarURL())
        .setColor('RANDOM')
            .setTitle(`Report : `)
            .setDescription(`
        User : ${message.author.tag} \n 
        Send : ${args}\n 
        Server : ${invite}`)
            .setThumbnail(message.guild.iconURL())
            .setFooter(`Requested By ${message.author.tag}`,message.author.displayAvatarURL())
        message.reply('درخواست باگ یا نظر شما به سرور پشتیبانی ارسال شد یا ادمین ها جوین سرور میشوند و حل میکنند یا به شما در خواست فرندی میدهند با تشکر')
        channelbug.send(soal)

    }
}
