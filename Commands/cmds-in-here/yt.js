const discord = require('discord.js')
const { CommandInteraction, Client } = require('discord.js')

module.exports = {
    name: 'yt',
    description: 'Nadaje youtubera',
    options: [
        {
            name: "typ",
            description: "Typ rangi",
            type: 3,
            required: true,
            choices: [
                {
                    name: "MiniYT",
                    value: "miniyt"
                },
                {
                    name: "YT",
                    value: "yt"
                },
                {
                    name: "YT+",
                    value: "yt+"
                }
            ]
        },
        {
            name: 'uzytkownik',
            description: 'Komu chcesz nadać ',
            type: 'USER',
            required: true
        }
    ],
    /**
     * @param {CommandInteraction} interaction
     */
    execute(interaction) {

        if(!interaction.member.roles.cache.get("920774660268908556" && "919996247279042611")) return interaction.reply({content: `Nie masz permisji!`})
        const osoba = interaction.options.getUser('uzytkownik')
        const member = interaction.guild.members.cache.get(osoba.id)

        const miniyt = interaction.options.get("miniyt")
        const yts = interaction.options.getSubcommand("yt")
        const ytss = interaction.options.getSubcommand("yt+")

        if(miniyt) {
            member.roles.add("855393441466548276")
            interaction.reply({content: "Pomyślnie nadano MiniYT"})
        }
        if(yts) {
            member.roles.add("855393441466548277")
            interaction.reply({content: "Pomyślnie nadano YT"})
        }
        if(ytss) {
            member.roles.add("855393441466548278")
            interaction.reply({content: "Pomyślnie nadano YT+"})
        }
        


        
    }
}