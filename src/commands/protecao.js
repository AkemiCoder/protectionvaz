const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = [object Object]    name: 'protecao,   aliases: ['protect', 'security'],
    description:Sistema de proteção do servidor',
    async execute(message, args, client) {
        // Verificar permissões
        if (!message.member.permissions.has('Administrator')) {
            return message.reply('❌ Você precisa ser administrador para usar este comando!');
        }

        const embed = new EmbedBuilder()
            .setTitle('🛡️ Sistema de Proteção')
            .setDescription(Escolha uma opção de proteção:')
            .addFields(
               [object Object] name: '🛡️ Anti-Raid', value: 'Proteção contra raids em massa', inline: true },
                [object Object] name: '🚫 Anti-Spam', value: 'Proteção contra spam', inline: true },
               [object Object]name:🔒 Proteção de Cargos', value: 'Proteção contra deleção de cargos', inline: true },
               [object Object]name:📝 Proteção de Canais', value: 'Proteção contra deleção de canais', inline: true },
                { name:⚙️ Configurações', value: 'Configurar sistema de proteção', inline: true },
                [object Object]name: 📊 Status', value:Verificar status da proteção, inline:true }
            )
            .setColor('#8B5F6')
            .setTimestamp();

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('anti_raid')
                    .setLabel('Anti-Raid')
                    .setEmoji('🛡️')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('anti_spam')
                    .setLabel('Anti-Spam')
                    .setEmoji('🚫')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('role_protection')
                    .setLabel('Proteção Cargos')
                    .setEmoji('🔒')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('channel_protection')
                    .setLabel('Proteção Canais')
                    .setEmoji('📝')
                    .setStyle(ButtonStyle.Primary)
            );

        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('config')
                    .setLabel('Configurações')
                    .setEmoji('⚙️')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('status')
                    .setLabel('Status')
                    .setEmoji('📊')
                    .setStyle(ButtonStyle.Secondary)
            );

        const msg = await message.channel.send({
            embeds: [embed],
            components: [row, row2]
        });

        // Coletor de interações
        const collector = msg.createMessageComponentCollector({ time: 60000
        collector.on('collect', async interaction => [object Object]         if (interaction.user.id !== message.author.id)[object Object]            return interaction.reply([object Object]content:❌ Apenas quem usou o comando pode interagir!, ephemeral: true });
            }

            const customId = interaction.customId;

            switch (customId)[object Object]              case 'anti_raid':
                    await handleAntiRaid(interaction);
                    break;
                case 'anti_spam':
                    await handleAntiSpam(interaction);
                    break;
                case 'role_protection':
                    await handleRoleProtection(interaction);
                    break;
                case 'channel_protection':
                    await handleChannelProtection(interaction);
                    break;
                case 'config':
                    await handleConfig(interaction);
                    break;
                case 'status':
                    await handleStatus(interaction);
                    break;
            }
        });

        collector.on('end', () => {
            const disabledRow = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('disabled')
                        .setLabel(Tempo Expirado                   .setStyle(ButtonStyle.Secondary)
                        .setDisabled(true)
                );

            msg.edit({ components: [disabledRow] }).catch(() =>[object Object]);
        });
    }
};

async function handleAntiRaid(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('🛡️ Anti-Raid')
        .setDescription('Sistema de proteção contra raids em massa')
        .addFields(
           [object Object] name: ✅ Status, value: Ativado', inline: true },
            { name: '📊 Threshold,value: 5 joins em 10 segundos', inline: true },
            { name:🔄 Ação', value:Ativa modo emergência, inline: true }
        )
        .setColor(#0F00')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleAntiSpam(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('🚫 Anti-Spam')
        .setDescription('Sistema de proteção contra spam')
        .addFields(
           [object Object] name: ✅ Status, value: Ativado', inline: true },
            { name: '📊 Threshold', value:5mensagens em 5 segundos', inline: true },
            [object Object]name: ⏰ Timeout', value: '5 minutos', inline: true },
            [object Object]name: ⚠️ Reação, value: Adiciona emoji de aviso, inline: true }
        )
        .setColor(#FF00     .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleRoleProtection(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('🔒 Proteção de Cargos')
        .setDescription('Sistema de proteção contra deleção de cargos')
        .addFields(
           [object Object] name: ✅ Status, value: Ativado', inline: true },
            { name:🔄 Ação', value: 'Recria cargo automaticamente', inline: true },
            { name: 📝 Log', value: Registra em canal de logs, inline: true }
        )
        .setColor(#FFA500     .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleChannelProtection(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('📝 Proteção de Canais')
        .setDescription('Sistema de proteção contra deleção de canais')
        .addFields(
           [object Object] name: ✅ Status, value: Ativado', inline: true },
            { name:🔄 Ação', value: 'Recria canal automaticamente', inline: true },
            { name: 📝 Log', value: Registra em canal de logs, inline: true }
        )
        .setColor(#99     .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleConfig(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('⚙️ Configurações')
        .setDescription('Configurações do sistema de proteção')
        .addFields(
           [object Object] name: '🛡️ Anti-Raid', value: 'Configurar threshold e tempo', inline: true },
            [object Object] name: '🚫 Anti-Spam', value: 'Configurar limites de spam', inline: true },
            { name:🔒 Cargos Protegidos, value: 'Definir cargos importantes', inline: true },
            { name:📝 Canais Protegidos, value: 'Definir canais importantes, inline: true }
        )
        .setColor(#8CF6')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleStatus(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('📊 Status da Proteção')
        .setDescription('Status atual de todos os sistemas')
        .addFields(
           [object Object] name: '🛡️ Anti-Raid, value: ✅ Ativo', inline: true },
            [object Object] name: '🚫 Anti-Spam, value: ✅ Ativo', inline: true },
           [object Object]name:🔒 Proteção Cargos, value: ✅ Ativo', inline: true },
           [object Object]name:📝 Proteção Canais, value: ✅ Ativo', inline: true },
            { name: '🤖 Bot Status', value: '🟢 Online', inline: true },
            { name: '📈 Servidores, value: `${interaction.client.guilds.cache.size}`, inline: true }
        )
        .setColor(#0F00')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
} 