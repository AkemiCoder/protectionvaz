const { Client, GatewayIntentBits, Collection, Events } = require('discord.js');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configuração do cliente Discord
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences
    ]
});

// Coleção para comandos
client.commands = new Collection();

// Sistema de prefixo dinâmico
class PrefixManager {
    constructor() {
        this.prefixes = new Map();
        this.defaultPrefix = process.env.PREFIX || 'vaz!';
        this.loadPrefixes();
    }

    // Carregar prefixos salvos
    loadPrefixes() {
        try {
            const data = fs.readFileSync('./prefixes.json', 'utf8');
            const prefixes = JSON.parse(data);
            this.prefixes = new Map(Object.entries(prefixes));
        } catch (error) {
            console.log('Arquivo de prefixos não encontrado, usando padrão');
            this.savePrefixes();
        }
    }

    // Salvar prefixos
    savePrefixes() {
        try {
            const data = JSON.stringify(Object.fromEntries(this.prefixes), null, 2);
            fs.writeFileSync('./prefixes.json', data);
        } catch (error) {
            console.error('Erro ao salvar prefixos:', error);
        }
    }

    // Obter prefixo para um servidor
    getPrefix(guildId) {
        return this.prefixes.get(guildId) || this.defaultPrefix;
    }

    // Definir prefixo para um servidor
    setPrefix(guildId, prefix) {
        this.prefixes.set(guildId, prefix);
        this.savePrefixes();
    }

    // Resetar prefixo para padrão
    resetPrefix(guildId) {
        this.prefixes.delete(guildId);
        this.savePrefixes();
    }

    // Listar todos os prefixos
    getAllPrefixes() {
        return Object.fromEntries(this.prefixes);
    }
}

// Instanciar gerenciador de prefixos
client.prefixManager = new PrefixManager();

// Carregar comandos
function loadCommands() {
    const commandsPath = path.join(__dirname, 'commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        
        if (Array.isArray(command)) {
            // Se o comando retorna um array, adicionar cada comando
            command.forEach(cmd => {
                if (cmd.name && cmd.execute) {
                    client.commands.set(cmd.name, cmd);
                    console.log(`✅ Comando carregado: ${cmd.name}`);
                }
            });
        } else if (command.name && command.execute) {
            // Comando único
            client.commands.set(command.name, command);
            console.log(`✅ Comando carregado: ${command.name}`);
        }
    }
}

// Evento ready
client.once(Events.ClientReady, () => {
    console.log(`🤖 Bot ${client.user.tag} está online!`);
    console.log(`📊 Servindo ${client.guilds.cache.size} servidores`);
    console.log(`👥 ${client.users.cache.size} usuários`);
    
    // Definir status do bot
    client.user.setActivity('vaz!ajuda | Proteção', { type: 'PLAYING' });
});

// Evento de mensagem
client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;
    if (!message.guild) return;

    const guildId = message.guild.id;
    const prefix = client.prefixManager.getPrefix(guildId);
    
    // Verificar se a mensagem começa com o prefixo
    if (!message.content.startsWith(prefix)) return;

    // Extrair comando e argumentos
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    // Buscar comando
    const command = client.commands.get(commandName) || 
                   client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
        // Verificar permissões
        if (command.permissions) {
            const authorPerms = message.channel.permissionsFor(message.author);
            if (!authorPerms || !command.permissions.every(perm => authorPerms.has(perm))) {
                return message.reply('❌ Você não tem permissão para usar este comando!');
            }
        }

        // Executar comando
        await command.execute(message, args, client);
    } catch (error) {
        console.error(`Erro ao executar comando ${commandName}:`, error);
        message.reply('❌Ocorreu um erro ao executar este comando!').catch(() => {
            // Ignorar erro de reply
        });
    }
});

// Evento de erro
client.on('error', error => {
    console.error('Erro do Discord.js:', error);
});

// Evento de desconexão
client.on('disconnect', () => {
    console.log('Bot desconectado do Discord');
});

// Processo de encerramento
process.on('SIGINT', () => {
    console.log('Encerrando bot...');
    client.destroy();
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('Encerrando bot...');
    client.destroy();
    process.exit(0);
});

// Carregar comandos e conectar
loadCommands();
client.login(process.env.DISCORD_TOKEN); 