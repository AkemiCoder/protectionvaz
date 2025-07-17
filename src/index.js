const { Client, GatewayIntentBits, Partials, Collection, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fs = require('fs');
const path = require(path');
require('dotenv').config();

// Configuração do cliente Discord
const client = new Client({
    intents:     GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildModeration
    ],
    partials: 
        Partials.Channel,
        Partials.Message,
        Partials.User,
        Partials.GuildMember
    ]
});

// Coleções para armazenar dados
client.commands = new Collection();
client.cooldowns = new Collection();
client.protectionData = new Map();

// Configurações do bot
const config = {
    prefix: process.env.PREFIX || vaz!    token: process.env.DISCORD_TOKEN,
    guildId: process.env.GUILD_ID,
    colors: [object Object]  success: process.env.LOG_COLOR_SUCCESS || #00ff00    error: process.env.LOG_COLOR_ERROR || #ff0000,
        warning: process.env.LOG_COLOR_WARNING || #ffff0     info: process.env.LOG_COLOR_INFO || '#099  }
};

// Sistema de proteção
class ProtectionSystem[object Object]
    constructor() {
        this.antiRaid = {
            enabled: true,
            threshold: 5, // Número de joins em 10 segundos
            timeWindow: 10000gundos
            recentJoins: new Map()
        };
        
        this.antiSpam = {
            enabled: true,
            threshold: 5, // Mensagens em 5 segundos
            timeWindow: 500gundos
            userMessages: new Map()
        };
        
        this.roleProtection = {
            enabled: true,
            protectedRoles: new Set()
        };
        
        this.channelProtection = {
            enabled: true,
            protectedChannels: new Set()
        };
    }

    // Anti-raid
    async handleMemberJoin(member) {
        if (!this.antiRaid.enabled) return;

        const guildId = member.guild.id;
        const now = Date.now();
        
        if (!this.antiRaid.recentJoins.has(guildId)) [object Object]
            this.antiRaid.recentJoins.set(guildId, []);
        }
        
        const recentJoins = this.antiRaid.recentJoins.get(guildId);
        recentJoins.push(now);
        
        // Remove joins antigos
        const validJoins = recentJoins.filter(time => now - time < this.antiRaid.timeWindow);
        this.antiRaid.recentJoins.set(guildId, validJoins);
        
        if (validJoins.length >= this.antiRaid.threshold) {
            await this.triggerAntiRaid(member.guild);
        }
    }

    async triggerAntiRaid(guild) {
        try {
            // Ativa modo emergência
            await guild.setVerificationLevel(4); // Muito Alto
            
            // Log da proteção
            const logChannel = guild.channels.cache.find(ch => ch.name.includes('log') || ch.name.includes('mod'));
            if (logChannel)[object Object]             const embed = new EmbedBuilder()
                    .setTitle('🛡️ Anti-Raid Ativado')
                    .setDescription('Sistema de proteção anti-raid foi ativado automaticamente!')
                    .setColor(config.colors.warning)
                    .setTimestamp();
                
                await logChannel.send({ embeds: [embed] });
            }
        } catch (error) {
            console.error('Erro ao ativar anti-raid:,error);
        }
    }

    // Anti-spam
    async handleMessage(message) {
        if (!this.antiSpam.enabled || message.author.bot) return;

        const userId = message.author.id;
        const now = Date.now();
        
        if (!this.antiSpam.userMessages.has(userId)) [object Object]
            this.antiSpam.userMessages.set(userId, []);
        }
        
        const userMessages = this.antiSpam.userMessages.get(userId);
        userMessages.push(now);
        
        // Remove mensagens antigas
        const validMessages = userMessages.filter(time => now - time < this.antiSpam.timeWindow);
        this.antiSpam.userMessages.set(userId, validMessages);
        
        if (validMessages.length >= this.antiSpam.threshold) {
            await this.handleSpam(message);
        }
    }

    async handleSpam(message) {
        try {
            // Adiciona reação de aviso
            await message.react('⚠️');
            
            // Timeout temporário
            const member = message.member;
            if (member && member.moderatable)[object Object]             await member.timeout(3000Spam detectado'); // 5 minutos
                
                const embed = new EmbedBuilder()
                    .setTitle(🚫 Spam Detectado')
                    .setDescription(`${message.author} foi silenciado por 5 minutos por spam.`)
                    .setColor(config.colors.error)
                    .setTimestamp();
                
                await message.channel.send({ embeds: [embed] });
            }
        } catch (error) {
            console.error(Erro ao lidar com spam:,error);
        }
    }

    // Proteção de cargos
    async handleRoleDelete(role) {
        if (!this.roleProtection.enabled) return;

        try [object Object]          // Tenta recriar o cargo
            const newRole = await role.guild.roles.create({
                name: role.name,
                color: role.color,
                hoist: role.hoist,
                permissions: role.permissions,
                mentionable: role.mentionable,
                reason: 'Proteção automática - cargo recriado'
            });

            const embed = new EmbedBuilder()
                .setTitle(🛡️ Proteção de Cargo)
                .setDescription(`Cargo **${role.name}** foi recriado automaticamente!`)
                .setColor(config.colors.success)
                .setTimestamp();

            const logChannel = role.guild.channels.cache.find(ch => ch.name.includes('log') || ch.name.includes('mod'));
            if (logChannel)[object Object]             await logChannel.send({ embeds: [embed] });
            }
        } catch (error) {
            console.error('Erro ao recriar cargo:,error);
        }
    }

    // Proteção de canais
    async handleChannelDelete(channel) {
        if (!this.channelProtection.enabled) return;

        try {
            // Recria o canal
            const newChannel = await channel.guild.channels.create({
                name: channel.name,
                type: channel.type,
                parent: channel.parent,
                position: channel.position,
                reason: 'Proteção automática - canal recriado'
            });

            const embed = new EmbedBuilder()
                .setTitle('🛡️ Proteção de Canal)
                .setDescription(`Canal **${channel.name}** foi recriado automaticamente!`)
                .setColor(config.colors.success)
                .setTimestamp();

            const logChannel = channel.guild.channels.cache.find(ch => ch.name.includes('log') || ch.name.includes('mod'));
            if (logChannel)[object Object]             await logChannel.send({ embeds: [embed] });
            }
        } catch (error) {
            console.error('Erro ao recriar canal:,error);
        }
    }
}

// Instância do sistema de proteção
const protectionSystem = new ProtectionSystem();

// Eventos do bot
client.once('ready', () =>[object Object]
    console.log(`🤖 Bot ${client.user.tag} está online!`);
    console.log(`🛡️ Sistema de proteção ativado`);
    console.log(`📊 Servindo ${client.guilds.cache.size} servidores`);
    
    client.user.setActivity('Protegendo servidores', { type: 'WATCHING' });
});

// Evento de membro entrando (anti-raid)
client.on('guildMemberAdd', async (member) => {
    await protectionSystem.handleMemberJoin(member);
});

// Evento de mensagem (anti-spam)
client.on('messageCreate,async (message) =>[object Object]if (message.author.bot) return;
    
    await protectionSystem.handleMessage(message);
    
    // Sistema de comandos
    if (!message.content.startsWith(config.prefix)) return;
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    const command = client.commands.get(commandName) || 
                   client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    if (!command) return;
    
    try {
        await command.execute(message, args, client);
    } catch (error)[object Object]     console.error('Erro ao executar comando:, error);
        message.reply(❌Ocorreu um erro ao executar o comando!');
    }
});

// Eventos de proteção
client.on('roleDelete,async (role) => {
    await protectionSystem.handleRoleDelete(role);
});

client.on('channelDelete,async (channel) => {
    await protectionSystem.handleChannelDelete(channel);
});

// Carregar comandos
const commandsPath = path.join(__dirname,commands');
if (fs.existsSync(commandsPath)) {
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        
        if ('name' in command && 'execute' in command) {
            client.commands.set(command.name, command);
            console.log(`📝 Comando carregado: ${command.name}`);
        }
    }
}

// Tratamento de erros
process.on('unhandledRejection', error => {
    console.error('Erro não tratado:', error);
});

process.on(uncaughtException', error => {
    console.error(Exceção não capturada:, error);
});

// Login do bot
client.login(config.token); 