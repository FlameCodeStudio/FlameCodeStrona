const discord = require('discord.js')
const { CommandInteraction, Client } = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'wyczysc',
    description: 'Usuwa wiadomosci',
    options: [
        {
            name: 'ilosc',
            description: 'Ilość usuwanych wiadomości ',
            type: 'NUMBER',
            required: true
        },
    ],
    /**
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {
        if(!interaction.member.roles.cache.get("919996247279042611")) return interaction.reply({content: `Nie masz permisji!`})
        const ilosc = interaction.options.getNumber('ilosc')
        
        if (ilosc < 1) return interaction.channel.send("Wpisz pozytywna liczbe")
        
        interaction.channel.bulkDelete(ilosc, true)

        
       


        const embed = new MessageEmbed()
        .setTitle(`ClanCraft - Usuwanie wiadomości`)
        .setDescription(`Usunięto ${ilosc} wiadomosci!`)
        .setColor("RED")
        interaction.reply({content: `Pomyślnie wysłano embeda!`})
        interaction.channel.send({embeds: [embed]})
        
        interaction.deleteReply();
    }   
}