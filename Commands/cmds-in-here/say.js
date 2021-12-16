const discord = require('discord.js')
const { CommandInteraction, Client } = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'embed',
    description: 'Tworzy embeda',
    options: [
        {
            name: 'tytul',
            description: 'Tytuł embeda ',
            type: 'STRING',
            required: true
        },
        {
            name: 'opis',
            description: 'Opis embeda ',
            type: 'STRING',
            required: true
        }
    ],
    /**
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {
        
        
        
        if(!interaction.member.roles.cache.get("919996247279042611")) return interaction.reply({content: `Nie masz permisji!`})
            
        
        const title = interaction.options.getString('tytul')
        const description = interaction.options.getString('opis')


        const embed = new MessageEmbed()
        .setTitle(`${title}`)
        .setDescription(`${description}`)
        interaction.reply({content: `Pomyślnie wysłano embeda!`})
        interaction.channel.send({embeds: [embed]})
    }
}