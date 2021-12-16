const { CommandInteraction, Client } = require('discord.js');
const discord = require('discord.js')

module.exports = {
    name: 'ready',
    once: true,
    /**
     * @param {Client} Client
     * @param {CommandInteraction} interaction
     */
    execute(Client, interaction) {
        console.log('[OGLOSZENIE] Bot zaladowal sie poprawnie!')

        const config = Client.config

        Client.user.setActivity(`ClanCraft.pl`, { type: 'WATCHING' })
    }
}