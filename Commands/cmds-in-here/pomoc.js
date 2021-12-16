const discord = require('discord.js')
const { CommandInteraction, Client } = require('discord.js')

module.exports = {
    name: 'pomoc',
    description: 'Pokazuje liste komend',
    
    /**
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {



        let embed = new discord.MessageEmbed()
        .setTitle("Komendy:")
        .setDescription("`SOON`")




        interaction.reply({content: "elo", embeds: [embed], ephmeral: true})
        
    }
}