# 🤖 Bot de Proteção Discord - AkemiCoder

Um bot de proteção avançado para servidores Discord com sistema de prefixo dinâmico e múltiplas funcionalidades de segurança.

## ✨ Funcionalidades

### 🛡️ Sistema de Proteção
- **Anti-Raid**: Proteção contra ataques em massa
- **Anti-Spam**: Detecção e prevenção de spam
- **Proteção de Cargos**: Prevenção de alterações não autorizadas
- **Proteção de Canais**: Proteção contra exclusão/criação de canais
- **Sistema de Logs**: Registro detalhado de todas as atividades

### 🎭 Sistema de Reações
- Reações automáticas em mensagens
- Múltiplas reações por mensagem
- Configuração personalizada de emojis
- Sistema de auto-reações

### ⚙️ Sistema de Prefixo Dinâmico
- **Prefixos personalizados por servidor**
- **Alteração em tempo real**
- **Persistência de configurações**
- **Reset para padrão**

## 🚀 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/AkemiCoder/bot-protecao-discord.git
cd bot-protecao-discord
```

2. **Instale as dependências**
```bash
npm install
```3nfigure o ambiente**
```bash
cp config.env.example config.env
```
4 **Edite o arquivo config.env**
```env
# Token do Bot Discord
DISCORD_TOKEN=SEU_TOKEN_AQUI

# ID do servidor (opcional)
GUILD_ID=SEU_GUILD_ID

# Prefixo padrão dos comandos
PREFIX=vaz!

# Cores para logs (hex)
LOG_COLOR_SUCCESS=#00ff00
LOG_COLOR_ERROR=#ff0000
LOG_COLOR_WARNING=#ffff00OG_COLOR_INFO=#0099ff
```

5**Execute o bot**
```bash
npm start
```

## 📋 Comandos Disponíveis

### 🎨 Sistema de Prefixo Dinâmico
- `vaz!prefixo` - Ver prefixo atual
- `vaz!prefixo <novo_prefixo>` - Alterar prefixo
- `vaz!prefixo reset` - Resetar para padrão

### 🛡️ Comandos de Proteção
- `vaz!protecao` - Menu principal de proteção
- `vaz!spam` - Configurar anti-spam
- `vaz!raid` - Configurar anti-raid
- `vaz!cargo` - Proteção de cargos
- `vaz!canal` - Proteção de canais
- `vaz!logs` - Configurar logs

### 🎭 Comandos de Reação
- `vaz!reacao` - Menu de reações
- `vaz!reacao <emoji>` - Adicionar reação simples
- `vaz!reacao multi` - Adicionar múltiplas reações
- `vaz!emojis` - Listar emojis do servidor
- `vaz!autoreacao` - Configurar auto-reações

### 📊 Comandos de Status
- `vaz!status` - Status geral do bot
- `vaz!protecoes` - Status das proteções
- `vaz!reacoes` - Status das reações
- `vaz!estatisticas` - Estatísticas do servidor
- `vaz!bot` - Informações do bot

### ❓ Comandos de Ajuda
- `vaz!ajuda` - Mostra todos os comandos
- `vaz!help` - Ajuda detalhada

## ⚙️ Sistema de Prefixo Dinâmico

O bot possui um sistema avançado de prefixo dinâmico que permite:

### 🔄 Funcionalidades
- **Prefixos únicos por servidor**: Cada servidor pode ter seu próprio prefixo
- **Alteração em tempo real**: Mudanças aplicadas instantaneamente
- **Persistência**: Configurações salvas automaticamente
- **Reset fácil**: Voltar ao prefixo padrão quando necessário

### 📝 Como Usar
```bash
# Ver prefixo atual
vaz!prefixo

# Alterar prefixo
vaz!prefixo !

# Resetar para padrão
vaz!prefixo reset
```

### 🔧 Validações
- Máximo de 5 caracteres
- Não pode conter espaços
- Caracteres especiais permitidos
- Verificação de duplicatas

## 🛠️ Estrutura do Projeto

```
Bot Do servidor Akemi/
├── src/
│   ├── index.js          # Arquivo principal
│   └── commands/         # Comandos do bot
│       ├── ajuda.js      # Sistema de ajuda
│       ├── prefixo.js    # Gerenciamento de prefixo
│       ├── protecao.js   # Sistema de proteção
│       ├── reacao.js     # Sistema de reações
│       └── status.js     # Status do bot
├── config.env            # Configurações do ambiente
├── config.env.example    # Exemplo de configuração
├── package.json          # Dependências do projeto
└── README.md            # Documentação
```

## 🔧 Configuração Avançada

### Permissões Necessárias
O bot precisa das seguintes permissões:
- **Gerenciar Servidor**: Para alterar prefixos
- **Gerenciar Cargos**: Para proteção de cargos
- **Gerenciar Canais**: Para proteção de canais
- **Ver Canais**: Para monitoramento
- **Enviar Mensagens**: Para comandos e logs
- **Usar Emojis Externos**: Para sistema de reações

### Variáveis de Ambiente
```env
# Obrigatório
DISCORD_TOKEN=token_do_seu_bot

# Opcional
GUILD_ID=id_do_servidor
PREFIX=prefixo_padrao
LOG_COLOR_SUCCESS=#00ff00
LOG_COLOR_ERROR=#ff0000
LOG_COLOR_WARNING=#ffff00OG_COLOR_INFO=#0099
```

## 🚀 Deploy

### Discloud
1. Configure o arquivo `discloud.config`
2. Faça upload para o Discloud
3. Configure as variáveis de ambiente

### Heroku1onecte seu repositório
2. Configure as variáveis de ambiente
3. Deploy automático

### VPS
1lone o repositório
2. Instale Node.js
3. Configure PM2 para produção
```bash
npm install -g pm2
pm2 start src/index.js --name "bot-protecao"
```

## 📊 Monitoramento

O bot inclui sistema de logs detalhado:
- Logs de comandos executados
- Logs de alterações de prefixo
- Logs de eventos de proteção
- Logs de erros e warnings

## 🤝 Contribuição

1um fork do projeto
2ie uma branch para sua feature
3mmit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**AkemiCoder**
- Discord: AkemiCoder#00
- GitHub: [@AkemiCoder](https://github.com/AkemiCoder)

## 🙏 Agradecimentos

- Discord.js pela excelente biblioteca
- Comunidade Discord pela inspiração
- Todos os contribuidores do projeto

---

⭐ **Se este projeto te ajudou, considere dar uma estrela!** 