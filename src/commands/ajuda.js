const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = [object Object]   name: 'ajuda,   aliases: ['help', 'comandos', 'commands'],
    description: 'Mostra todos os comandos disponíveis',
    async execute(message, args, client) {
        const prefix = client.prefixManager.getPrefix(message.guild.id);
        
        const embed = new EmbedBuilder()
            .setTitle('🛡️ Bot de Proteção - Comandos')
            .setDescription(Listacompleta de comandos disponíveis:')
            .addFields(
                { name:🛡️ + prefix + protecao,value:Sistema de proteção do servidor', inline: true },
                { name: 🎭 ' + prefix + reacao,value: 'Sistema de reações com emojis', inline: true },
                { name: 📊 + prefix + status', value: 'Status do bot e proteções', inline: true },
                { name: ⚙️ + prefix + config', value:Configurações do bot', inline: true },
                { name: 🔒 ' + prefix +cargo', value: 'Proteção de cargos', inline: true },
                { name: 📝 + prefix +canal', value: 'Proteção de canais', inline: true },
                { name: 🚫 + prefix + 'spam', value: 'Configurar anti-spam', inline: true },
                { name:🛡️ + prefix + 'raid', value:Configurar anti-raid', inline: true },
                { name: 📋+ prefix + 'logs', value: Configurar logs', inline: true },
                { name: 🎨 + prefix +prefixo, value: 'Alterar prefixo dos comandos, inline:true }
            )
            .setColor('#8B5F6')
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
        const collector = msg.createMessageComponentCollector({ time: 60;
        
        collector.on('collect', async interaction => [object Object]         if (interaction.user.id !== message.author.id)[object Object]            return interaction.reply([object Object]content:❌ Apenas quem usou o comando pode interagir!, ephemeral: true });
            }

            const customId = interaction.customId;

            switch (customId)[object Object]              caseprotecao_help                   await handleProtecaoHelp(interaction, prefix);
                    break;
                case 'reacao_help':
                    await handleReacaoHelp(interaction, prefix);
                    break;
                case 'config_help':
                    await handleConfigHelp(interaction, prefix);
                    break;
                case 'status_help':
                    await handleStatusHelp(interaction, prefix);
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

async function handleProtecaoHelp(interaction, prefix)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('🛡️ Comandos de Proteção')
        .setDescription('Comandos relacionados à proteção do servidor:')
        .addFields(
            { name:🛡️ + prefix + protecao', value: Menuprincipal de proteção', inline: true },
            { name: 🚫 + prefix + 'spam', value: 'Configurar anti-spam', inline: true },
            { name:🛡️ + prefix + 'raid', value:Configurar anti-raid', inline: true },
            { name: 🔒 ' + prefix +cargo', value: 'Proteção de cargos', inline: true },
            { name: 📝 + prefix +canal', value: 'Proteção de canais', inline: true },
            { name: 📋+ prefix + 'logs', value: Configurar logs, inline: true }
        )
        .setColor(#8BF6')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleReacaoHelp(interaction, prefix)[object Object]
    const embed = new EmbedBuilder()
        .setTitle(🎭Comandos de Reação')
        .setDescription('Comandos relacionados ao sistema de reações:')
        .addFields(
            { name: 🎭 ' + prefix + reacao,value: Menu de reações', inline: true },
            { name:✅ ' + prefix +reacao <emoji>, value:Adicionar reação simples', inline: true },
            { name: 🎯 ' + prefix + 'reacao multi, value: Adicionar múltiplas reações', inline: true },
            { name: 📋 + prefix + emojis', value:Listar emojis do servidor', inline: true },
            { name: 🔄+ prefix + 'autoreacao', value: 'Configurar auto-reações', inline: true },
            { name: ⚙️ + prefix + 'configreacao', value: 'Configurar reações, inline: true }
        )
        .setColor(#FF6B6B')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleConfigHelp(interaction, prefix)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('⚙️ Comandos de Configuração')
        .setDescription('Comandos para configurar o bot:')
        .addFields(
            { name: ⚙️ + prefix + config, value:Menu de configurações', inline: true },
            { name: 🎨 + prefix +prefixo, value: 'Alterar prefixo dos comandos', inline: true },
            { name: 📝+ prefix + 'logs', value:Configurar canal de logs', inline: true },
            { name:🛡️ + prefix + protecoes', value:Configurar proteções', inline: true },
            { name: 🎭 ' + prefix +reacoes', value: 'Configurar reações', inline: true },
            { name: 📊 + prefix + 'estatisticas', value:Configurar estatísticas, inline: true }
        )
        .setColor(#44     .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleStatusHelp(interaction, prefix)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('📊 Comandos de Status')
        .setDescription(Comandos para verificar status:')
        .addFields(
            { name: 📊 + prefix + status', value: 'Status geral do bot', inline: true },
            { name:🛡️ + prefix + protecoes', value:Status das proteções', inline: true },
            { name: 🎭 ' + prefix +reacoes', value: 'Status das reações', inline: true },
            { name: 📈 + prefix + 'estatisticas', value: 'Estatísticas do servidor', inline: true },
            { name: 🤖 + prefix + 'bot', value: 'Informações do bot', inline: true },
            { name: 📋+ prefix + 'logs', value: Ver logs recentes, inline: true }
        )
        .setColor(#96B4F')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
} 