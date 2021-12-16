const discord = require('discord.js')
const { CommandInteraction, Client } = require('discord.js')

module.exports = {
    name: 'mute',
    description: 'Info o uzytkowniku',

    
    /**
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {
        const embed = new discord.MessageEmbed()
        .setTitle("ClanCraft")
        .setDescription("Ta funkcja nie jest dostepna")
        .setColor("RED")
        interaction.reply({content: `Witaj!`})
        interaction.channel.send({embeds: [embed]})
        interaction.deleteReply()
        

        
        


        





        
    }
}