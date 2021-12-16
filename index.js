const { Client, Collection } = require('discord.js');
const client = new Client({ intents: 32767 });
const discord = require('discord.js')
const config = require('./config.json');
client.commands = new Collection()
client.config = config
require('./Handlers/Events.js')(client)
require('./Handlers/Commands.js')(client)




client.once('ready', () => {
    console.log('[STATUS] Komendy zarejestrowane!')
})
client.login(client.config.token)