const { EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = [object Object]
    name: prefixo, aliases: [prefix',setprefix],
    description: Alterar o prefixo dos comandos do bot,
    permissions: [PermissionFlagsBits.ManageGuild],
    async execute(message, args, client) {
        const guildId = message.guild.id;
        const currentPrefix = client.prefixManager.getPrefix(guildId);
        const defaultPrefix = client.prefixManager.defaultPrefix;

        // Se não há argumentos, mostrar prefixo atual
        if (!args.length) {
            const embed = new EmbedBuilder()
                .setTitle('⚙️ Configuração de Prefixo)
                .setDescription(`**Prefixos atuais:**`)
                .addFields(
                    [object Object] name:🔄 Prefixo Atual', value: `\`$[object Object]currentPrefix}\``, inline: true },
                    [object Object] name: 📋 Prefixo Padrão', value: `\`$[object Object]defaultPrefix}\``, inline: true },
                    { name: '📝 Como usar', value: `\`${currentPrefix}prefixo <novo_prefixo>\``, inline: false },
                   [object Object] name: '🔄 Resetar', value: `\`${currentPrefix}prefixo reset\``, inline: false }
                )
                .setColor('#8B5BF6
                .setFooter({ text: Bot de Proteção - AkemiCoder' })
                .setTimestamp();

            return message.reply({ embeds: [embed] });
        }

        const newPrefix = args[0].toLowerCase();

        // Verificar se é para resetar
        if (newPrefix === 'reset') {
            client.prefixManager.resetPrefix(guildId);
            
            const embed = new EmbedBuilder()
                .setTitle('✅ Prefixo Resetado)
                .setDescription(`O prefixo foi resetado para o padrão: \`${defaultPrefix}\``)
                .setColor('#00FF00
                .setFooter({ text: Bot de Proteção - AkemiCoder' })
                .setTimestamp();

            return message.reply({ embeds: [embed] });
        }

        // Validações do novo prefixo
        if (newPrefix.length > 5) {
            return message.reply('❌ O prefixo não pode ter mais de5cteres!');
        }

        if (newPrefix.includes(')) {            return message.reply('❌ O prefixo não pode conter espaços!');
        }

        // Caracteres especiais permitidos
        const allowedChars = /^[a-zA-Z0-9@#$%^&*()_+\-=\\]object Object];':"\\|,.<>\/?]+$/;
        if (!allowedChars.test(newPrefix)) {
            return message.reply('❌ O prefixo contém caracteres inválidos!');
        }

        // Verificar se o prefixo já está em uso
        if (newPrefix === currentPrefix) {
            return message.reply('❌ Este já é o prefixo atual!');
        }

        // Aplicar novo prefixo
        client.prefixManager.setPrefix(guildId, newPrefix);

        const embed = new EmbedBuilder()
            .setTitle('✅ Prefixo Alterado')
            .setDescription(`O prefixo foi alterado com sucesso!`)
            .addFields(
                [object Object] name: '🔄 Prefixo Anterior', value: `\`$[object Object]currentPrefix}\``, inline: true },
           [object Object]name:✅ Novo Prefixo, value: `\`${newPrefix}\``, inline: true },
            [object Object] name: 📝 Exemplo, value: `\`${newPrefix}ajuda\``, inline: false }
            )
            .setColor('#0FF0)
            .setFooter({ text: Bot de Proteção - AkemiCoder })
            .setTimestamp();

        message.reply({ embeds: [embed] });

        // Log da alteração
        console.log(`[PREFIXO] Servidor ${message.guild.name} (${guildId}) alterou prefixo de ${currentPrefix}para ${newPrefix}"`);
    }
}; 