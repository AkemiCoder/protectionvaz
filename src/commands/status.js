const { EmbedBuilder } = require('discord.js');

module.exports = {
    name:status,   aliases: ['info, ],
    description: 'Mostra o status do bot e proteções',
    async execute(message, args, client) {
        const embed = new EmbedBuilder()
            .setTitle('🤖 Status do Bot de Proteção')
            .setDescription(Informações sobre o bot e suas proteções')
            .addFields(
                { name: '🤖 Bot Status', value: '🟢 Online', inline: true },
                { name: '📊 Servidores', value: `${client.guilds.cache.size}`, inline: true },
             [object Object]name: '👥 Usuários', value: `${client.users.cache.size}`, inline: true },
               [object Object] name: '🛡️ Anti-Raid, value: ✅ Ativo', inline: true },
                [object Object] name: '🚫 Anti-Spam, value: ✅ Ativo', inline: true },
               [object Object]name:🔒 Proteção Cargos, value: ✅ Ativo', inline: true },
               [object Object]name:📝 Proteção Canais, value: ✅ Ativo', inline: true },
         [object Object] name: '🎭 Sistema Reações, value: ✅ Ativo', inline: true },
                { name:📋 Logs, value: ✅ Ativo, inline:true }
            )
            .setColor('#00FF0)
            .setFooter({ text: Bot de Proteção - AkemiCoder })
            .setTimestamp();

        await message.reply({ embeds: [embed] });
    }
}; 