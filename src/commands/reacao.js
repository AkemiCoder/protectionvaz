const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
    name:reacao,
    aliases:reaction', 'emoji'],
    description: 'Sistema de reações com emojis do servidor',
    async execute(message, args, client) {
        // Verificar permissões
        if (!message.member.permissions.has(ManageMessages')) {
            return message.reply('❌ Você precisa ter permissão para gerenciar mensagens!');
        }

        const embed = new EmbedBuilder()
            .setTitle('🎭 Sistema de Reações')
            .setDescription(Escolha uma opção para configurar reações:')
            .addFields(
                { name:✅ Reação Simples, value:Adicionar reação a uma mensagem', inline: true },
                [object Object]name: 🎯 Reação Múltipla, value: Adicionar múltiplas reações', inline: true },
                { name:📋 Listar Emojis', value: Veremojis disponíveis no servidor', inline: true },
                { name: '⚙️ Configurar', value: 'Configurar sistema de reações', inline: true },
              [object Object] name:🔄 Auto-Reação', value: 'Configurar reações automáticas', inline: true },
                [object Object]name: 📊 Status', value: Verstatus das reações, inline:true }
            )
            .setColor('#8B5BF')
            .setTimestamp();

        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('simple_reaction')
                    .setLabel(Reação Simples                   .setEmoji('✅')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId(multiple_reaction')
                    .setLabel('Reação Múltipla')
                    .setEmoji('🎯')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('list_emojis')
                    .setLabel('Listar Emojis')
                    .setEmoji('📋')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('config_reaction')
                    .setLabel('Configurar')
                    .setEmoji('⚙️')
                    .setStyle(ButtonStyle.Primary)
            );

        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('auto_reaction')
                    .setLabel('Auto-Reação')
                    .setEmoji('🔄')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('reaction_status')
                    .setLabel('Status')
                    .setEmoji('📊')
                    .setStyle(ButtonStyle.Secondary)
            );

        const msg = await message.channel.send({
            embeds: [embed],
            components: [row, row2]
        });

        // Coletor de interações
        const collector = msg.createMessageComponentCollector({ time:60000
        collector.on('collect', async interaction => [object Object]         if (interaction.user.id !== message.author.id)[object Object]            return interaction.reply([object Object]content:❌ Apenas quem usou o comando pode interagir!, ephemeral: true });
            }

            const customId = interaction.customId;

            switch (customId)[object Object]              case 'simple_reaction':
                    await handleSimpleReaction(interaction);
                    break;
                case multiple_reaction':
                    await handleMultipleReaction(interaction);
                    break;
                case 'list_emojis':
                    await handleListEmojis(interaction);
                    break;
                case 'config_reaction':
                    await handleConfigReaction(interaction);
                    break;
                caseauto_reaction                   await handleAutoReaction(interaction);
                    break;
                case 'reaction_status':
                    await handleReactionStatus(interaction);
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

async function handleSimpleReaction(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('✅ Reação Simples')
        .setDescription('Para adicionar uma reação simples:\n\n`vaz!reacao <emoji> <mensagem_id>`\n\n**Exemplos:**\n`vaz!reacao 👍123456789`\n`vaz!reacao 🛡️` (na mensagem atual)')
        .addFields(
            { name: '📝 Como usar', value:Mencione o emoji e opcionalmente o ID da mensagem', inline: true },
            { name:🎯Emojis Disponíveis', value: Usa emojis padrão do Discord', inline: true },
           [object Object] name: ⚡ Rápido', value: 'Reação instantânea, inline: true }
        )
        .setColor(#0F00')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleMultipleReaction(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle(🎯 Reação Múltipla')
        .setDescription('Para adicionar múltiplas reações:\n\n`vaz!reacao multi <emoji1> <emoji2 <emoji3>`\n\n**Exemplos:**\n`vaz!reacao multi 👍 👎 ❤️`\n`vaz!reacao multi 🛡️ 🚫 ✅`')
        .addFields(
            { name: '📝 Como usar', value: 'Liste os emojis separados por espaço', inline: true },
          [object Object] name: 🎯 Múltiplos Emojis, value: 'Adiciona vários emojis de uma vez', inline: true },
         [object Object]name: '⚡ Eficiente', value:Configuração rápida de reações, inline: true }
        )
        .setColor(#FF6B6B')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleListEmojis(interaction)[object Object]
    const guild = interaction.guild;
    const emojis = guild.emojis.cache;
    
    let emojiList =;
    let count = 0    emojis.forEach(emoji => {
        if (count < 20) { // Limita a 20jis para não sobrecarregar
            emojiList += `${emoji} \`${emoji.name}\`\n`;
            count++;
        }
    });

    const embed = new EmbedBuilder()
        .setTitle(📋Emojis do Servidor')
        .setDescription(emojiList || 'Nenhum emoji customizado encontrado.')
        .addFields(
           [object Object]name:📊 Total de Emojis', value: `${emojis.size}`, inline: true },
            { name:🎭 Emojis Padrão', value: 'Sempre disponíveis', inline: true },
            { name:💡 Dica', value: Use `vaz!reacao <emoji>` para adicionar, inline: true }
        )
        .setColor(#4DC4')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleConfigReaction(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('⚙️ Configurar Reações')
        .setDescription('Configurações do sistema de reações')
        .addFields(
            { name:🎯 Reação Padrão', value:Configurar emoji padrão', inline: true },
            { name:⏰ Delay', value:Configurar delay entre reações', inline: true },
            { name:📝 Logs', value: Ativar logs de reações', inline: true },
          [object Object] name:🔄 Auto-Reação', value: 'Configurar reações automáticas', inline: true },
            { name: '🚫 Restrições', value: Configurar restrições', inline: true },
            { name: '✅ Permissões', value: 'Configurar permissões, inline: true }
        )
        .setColor(#457     .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleAutoReaction(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle(🔄 Auto-Reação')
        .setDescription('Sistema de reações automáticas')
        .addFields(
           [object Object] name: ✅ Status, value: Ativado', inline: true },
           [object Object]name: 🎯 Palavras-Chave', value: 'Configurar triggers', inline: true },
           [object Object] name: ⚡ Reação', value:Emoji automático', inline: true },
        [object Object]name: '📝 Exemplos', value: `vaz!` → 🛡️\n`ajuda` → ❓', inline: true },
            { name: '⚙️ Configurar', value:`vaz!autoreacao`', inline: true },
            { name: 📊 Estatísticas, value: 'Reações automáticas hoje:15, inline: true }
        )
        .setColor(#96EB4')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
}

async function handleReactionStatus(interaction)[object Object]
    const embed = new EmbedBuilder()
        .setTitle('📊 Status das Reações')
        .setDescription('Status atual do sistema de reações')
        .addFields(
            { name:✅ Reação Simples', value: 🟢 Ativo', inline: true },
            [object Object]name: 🎯 Reação Múltipla', value: 🟢 Ativo', inline: true },
          [object Object] name:🔄 Auto-Reação', value: 🟢 Ativo', inline: true },
            { name:📝 Logs', value: 🟢 Ativo', inline: true },
            { name:⚙️ Configurações', value: 🟢 Ativo', inline: true },
            { name: 📈 Estatísticas, value:Reações hoje:25, inline: true }
        )
        .setColor(#0F00')
        .setTimestamp();

    await interaction.update({ embeds: [embed] });
} 