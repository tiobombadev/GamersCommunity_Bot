module.exports.run = async (client, message, args) => {
}
    const Discord = require('discord.js');    

    exports.run = (client, message, args) => {
        let reason = args.slice(1).join(' ');
        let user = message.mentions.users.first();
        let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Silenciado');
        if (!muteRole) return message.reply('eu não achei o cargo `Silenciado`, adicione para eu poder despunir alguém.').catch(console.error);

        if (message.mentions.users.size < 1) return message.reply('mencione um membro já mutado para eu desmutar.').catch(console.error);
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('Ação:', 'Unmute')
          .addField('Usuário punido:', `${user.username}#${user.discriminator}`)
          .addField('Staffer:', `${message.author.username}#${message.author.discriminator}`);
      
        if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('eu não tenho as permissões corretas para eu poder desmutar alguém.').catch(console.error);
      
        if (message.guild.member(user).roles.has(muteRole.id)) {
          message.guild.member(user).removeRole(muteRole).then(() => {
            client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
          });
        } else {
          message.guild.member(user).removeRole(muteRole).then(() => {
            client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
          });
        }
      
      };
      
      exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };
      
      exports.help = {
        name: 'mute',
        description: 'mutes or unmutes a mentioned user',
        usage: 'un/mute [mention]'
      };