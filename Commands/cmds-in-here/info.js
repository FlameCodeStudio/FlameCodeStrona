const discord = require('discord.js')
const { CommandInteraction, Client } = require('discord.js')

module.exports = {
    name: 'info',
    description: 'Info o uzytkowniku',
    options: [
        {
            name: 'uzytkownik',
            description: 'O kim chcesz sie dowiedziec ',
            type: 'USER',
            required: true
        }
    ],
    /**
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {
        const content = interaction.options.getUser('uzytkownik')


        const embed = new discord.MessageEmbed()
        .setAuthor("Informacje " + content.tag,
        content.displayAvatarURL)
        .setTitle(`Oto kilka informacji o użytkowniku:`)
        .setDescription(`Założył konto: **${content.createdAt.toLocaleString()}**\n\nNick: **${content.nickname || 'None'}**\n\nID Użytkownika: **${content.id}**`)
        interaction.reply({content: 'Witaj!', embeds: [embed]})
    }
}