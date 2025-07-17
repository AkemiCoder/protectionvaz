# 🤖 Bot de Proteção Discord - AkemiCoder

Um bot completo de proteção para servidores Discord com sistema anti-raid, anti-spam, proteção de cargos e canais, e sistema de reações com emojis.

## 🛡️ Funcionalidades

### Proteção Automática
- **🛡️ Anti-Raid**: Detecta raids em massa e ativa modo emergência
- **🚫 Anti-Spam**: Previne spam com timeout automático
- **🔒 Proteção de Cargos**: Recria cargos deletados automaticamente
- **📝 Proteção de Canais**: Recria canais deletados automaticamente

### Sistema de Reações
- **🎭 Reações Simples**: Adiciona emojis a mensagens
- **🎯 Reações Múltiplas**: Adiciona vários emojis de uma vez
- **🔄 Auto-Reações**: Reações automáticas baseadas em palavras-chave
- **📋 Emojis do Servidor**: Usa emojis customizados do servidor

### Comandos Principais
- `vaz!protecao` - Menu principal de proteção
- `vaz!reacao` - Sistema de reações
- `vaz!ajuda` - Lista de comandos
- `vaz!status` - Status do bot

## 🚀 Instalação

### 1. Pré-requisitos
- Node.js 16+ instalado
- Conta no Discord Developer Portal
- Bot criado no Discord

### 2. Configuração
```bash
# Clone o repositório
git cloneurl-do-repositorio]
cd bot-protecao-discord

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp config.env.example .env
```

### 3 Configuração do .env
```env
# Token do Bot Discord
DISCORD_TOKEN=seu_token_aqui

# ID do servidor (opcional)
GUILD_ID=id_do_servidor_aqui

# Prefixo dos comandos
PREFIX=vaz!

# Cores para logs (hex)
LOG_COLOR_SUCCESS=#00ff00
LOG_COLOR_ERROR=#ff0000
LOG_COLOR_WARNING=#ffff00OG_COLOR_INFO=#99f
```

### 4Executar o Bot
```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

## 📋 Comandos Disponíveis

### Proteção
- `vaz!protecao` - Menu de proteção
- `vaz!spam` - Configurar anti-spam
- `vaz!raid` - Configurar anti-raid
- `vaz!cargo` - Proteção de cargos
- `vaz!canal` - Proteção de canais

### Reações
- `vaz!reacao` - Menu de reações
- `vaz!reacao <emoji>` - Adicionar reação simples
- `vaz!reacao multi <emoji1> <emoji2 - Reações múltiplas
- `vaz!emojis` - Listar emojis do servidor

### Informações
- `vaz!ajuda` - Lista de comandos
- `vaz!status` - Status do bot
- `vaz!config` - Configurações

## 🛡️ Sistema de Proteção

### Anti-Raid
- Detecta quando 5usuários entram em 10undos
- Ativa modo emergência automaticamente
- Aumenta nível de verificação do servidor
- Envia alerta em canal de logs

### Anti-Spam
- Detecta5mensagens em 5 segundos
- Aplica timeout de 5 minutos
- Adiciona reação de aviso (⚠️)
- Registra ação em logs

### Proteção de Cargos/Canais
- Recria automaticamente cargos/canais deletados
- Mantém configurações originais
- Registra ação em logs
- Proteção em tempo real

## 🎭 Sistema de Reações

### Reações Simples
```
vaz!reacao 👍
vaz!reacao 🛡️ 123456789```

### Reações Múltiplas
```
vaz!reacao multi 👍 👎 ❤️
vaz!reacao multi 🛡️ 🚫 ✅
```

### Auto-Reações
- `vaz!` → 🛡️
- `ajuda` → ❓
- `protecao` → 🛡️

## ⚙️ Configuração Avançada

### Permissões Necessárias
- **Administrador**: Para comandos de proteção
- **Gerenciar Mensagens**: Para sistema de reações
- **Gerenciar Cargos**: Para proteção de cargos
- **Gerenciar Canais**: Para proteção de canais

### Canais Recomendados
- `#logs` - Canal para logs de proteção
- `#mod` - Canal para moderadores
- `#comandos` - Canal para comandos do bot

## 🔧 Personalização

### Cores dos Embeds
Edite as cores no arquivo `.env`:
```env
LOG_COLOR_SUCCESS=#00ff00
LOG_COLOR_ERROR=#ff0000
LOG_COLOR_WARNING=#ffff00OG_COLOR_INFO=#0099ff
```

### Prefixo dos Comandos
Altere o prefixo no arquivo `.env`:
```env
PREFIX=seu_prefixo!
```

## 📊 Monitoramento

O bot registra automaticamente:
- Tentativas de raid
- Spam detectado
- Deleção de cargos/canais
- Reações adicionadas
- Erros e exceções

## 🛠️ Desenvolvimento

### Estrutura do Projeto
```
src/
├── index.js          # Arquivo principal
├── commands/         # Comandos do bot
│   ├── protecao.js
│   ├── reacao.js
│   ├── ajuda.js
│   └── status.js
└── utils/           # Utilitários
```

### Adicionando Novos Comandos
1 Crie arquivo em `src/commands/`2Exporte objeto com `name`, `description` e `execute`
3. O bot carrega automaticamente

## 🤝 Contribuição

1. Fork o projeto
2ie uma branch para sua feature
3mmit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**AkemiCoder** - Desenvolvedor do bot de proteção

---

⭐ Se este projeto te ajudou, considere dar uma estrela! 