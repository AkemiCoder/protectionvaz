const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = [object Object]   name: 'ajuda,   aliases: ['help', 'comandos', 'commands'],
    description: 'Mostra todos os comandos disponíveis',
    async execute(message, args, client) {
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Bot de Proteção - Comandos')
            .setDescription(Listacompleta de comandos disponíveis:')
            .addFields(
               [object Object]name:🛡️ vaz!protecao,value:Sistema de proteção do servidor', inline: true },
                { name: '🎭 vaz!reacao,value: 'Sistema de reações com emojis', inline: true },
                { name: '📊 vaz!status', value: 'Status do bot e proteções', inline: true },
                { name: '⚙️ vaz!config', value:Configurações do bot', inline: true },
                { name: '🔒 vaz!cargo', value: 'Proteção de cargos', inline: true },
              [object Object] name: '📝 vaz!canal', value: 'Proteção de canais', inline: true },
                [object Object]name: '🚫 vaz!spam', value: 'Configurar anti-spam', inline: true },
                { name: '🛡️ vaz!raid', value:Configurar anti-raid', inline: true },
              [object Object]name: '📋 vaz!logs', value: Configurar logs, inline:true }
            )
            .setColor('#8B5BF')
            .setFooter({ text: Bot de Proteção - AkemiCoder })
            .setTimestamp();

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('protecao_help')
                    .setLabel('Proteção')
                    .setEmoji('🛡️')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('reacao_help')
                    .setLabel('Reações')
                    .setEmoji('🎭')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('config_help')
                    .setLabel('Config')
                    .setEmoji('⚙️')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('status_help')
                    .setLabel('Status')
                    .setEmoji('📊')
                    .setStyle(ButtonStyle.Primary)
            );

        const msg = await message.channel.send({
            embeds: [embed],
            components: [row]
        });

        // Coletor de interações
        const collector = msg.createMessageComponentCollector({ time:60000
        collector.on('collect', async interaction => [object Object]         if (interaction.user.id !== message.author.id)[object Object]            return interaction.reply([object Object]content:❌ Apenas quem usou o comando pode interagir!, ephemeral: true });
            }

            const customId = interaction.customId;

            switch (customId)[object Object]              caseprotecao_help                   await handleProtecaoHelp(interaction);
                    break;
                case 'reacao_help':
                    await handleReacaoHelp(interaction);
                    break;
                case 'config_help':
                    await handleConfigHelp(interaction);
                    break;
                case 'status_help':
                    await handleStatusHelp(interaction);
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

async function handleProtecaoHelp(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('🛡️ Comandos de Proteção')
        .setDescription('Comandos relacionados à proteção do servidor:')
        .addFields(
           [object Object]name:🛡️ vaz!protecao', value: Menuprincipal de proteção', inline: true },
            [object Object]name: '🚫 vaz!spam', value: 'Configurar anti-spam', inline: true },
            { name: '🛡️ vaz!raid', value:Configurar anti-raid', inline: true },
            { name: '🔒 vaz!cargo', value: 'Proteção de cargos', inline: true },
          [object Object] name: '📝 vaz!canal', value: 'Proteção de canais', inline: true },
          [object Object]name: '📋 vaz!logs', value: Configurar logs, inline: true }
        )
        .setColor(#0F00')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleReacaoHelp(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle(🎭Comandos de Reação')
        .setDescription('Comandos relacionados ao sistema de reações:')
        .addFields(
            { name: '🎭 vaz!reacao,value: Menu de reações', inline: true },
            { name: ✅ vaz!reacao <emoji>, value:Adicionar reação simples', inline: true },
            { name: '🎯 vaz!reacao multi, value: Adicionar múltiplas reações', inline: true },
            [object Object]name: '📋 vaz!emojis', value:Listar emojis do servidor', inline: true },
          [object Object] name: 🔄 vaz!autoreacao', value: 'Configurar auto-reações', inline: true },
            { name: '⚙️ vaz!configreacao', value: 'Configurar reações, inline: true }
        )
        .setColor(#FF6B6B')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleConfigHelp(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('⚙️ Comandos de Configuração')
        .setDescription('Comandos para configurar o bot:')
        .addFields(
            { name: '⚙️ vaz!config, value:Menu de configurações', inline: true },
            { name:🎨 vaz!prefixo, value: 'Alterar prefixo dos comandos', inline: true },
          [object Object]name: '📝 vaz!logs', value:Configurar canal de logs', inline: true },
           [object Object]name: 🛡️ vaz!protecoes', value:Configurar proteções', inline: true },
            { name:🎭 vaz!reacoes', value: 'Configurar reações', inline: true },
          [object Object] name: 📊 vaz!estatisticas', value:Configurar estatísticas, inline: true }
        )
        .setColor(#4DC4')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleStatusHelp(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('📊 Comandos de Status')
        .setDescription(Comandos para verificar status:')
        .addFields(
            { name: '📊 vaz!status', value: 'Status geral do bot', inline: true },
           [object Object]name: 🛡️ vaz!protecoes', value:Status das proteções', inline: true },
            { name:🎭 vaz!reacoes', value: 'Status das reações', inline: true },
          [object Object] name: 📈 vaz!estatisticas', value: 'Estatísticas do servidor', inline: true },
          [object Object] name: '🤖 vaz!bot', value: 'Informações do bot', inline: true },
          [object Object]name: '📋 vaz!logs', value: Ver logs recentes, inline: true }
        )
        .setColor(#96EB4')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
} 