const discord = require('discord.js')
const { CommandInteraction, Client } = require('discord.js')

module.exports = {
    name: 'lider',
    description: 'Daje lidera gildi',
    options: [
        {
            name: 'uzytkownik',
            description: 'O kim chcesz sie dowiedziec ',
            type: 'USER',
            required: true
        },
        {
            name: 'tag',
            description: 'tag gildi ',
            type: 'STRING',
            required: true
        }
    ],
    /**
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {
        if(!interaction.member.roles.cache.get("920711017728729138" && "919996247279042611")) return interaction.reply({content: `Nie masz permisji!`})
        
        
        const osoba = interaction.options.getUser('uzytkownik')
        const member = interaction.guild.members.cache.get(osoba.id)
        const tag = interaction.options.getString('tag')
        

        member.roles.add("857586249291923466")
        member.setNickname("[" + tag + "] " + member.nickname)

        interaction.reply({content: "Pomyślnie nadano lidera oraz tag!"})


        
    }
}