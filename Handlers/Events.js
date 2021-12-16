const { Events } = require('../Validations/EventNames');
const { promisify } = require('util');
const { glob } = require('glob');
const PG = promisify(glob);
const Ascii = require('ascii-table');

module.exports = async (client) => {
    const Table = new Ascii('Event załadowany');

        (await PG(`${process.cwd()}/Events/*/*.js`)).map(async (file) => {
            const event = require(file);

            if (!Events.includes(event.name) || !event.name) {
                const L = file.split('/');
                await Table.addRow(`${event.name || "BRAKUJE"}`, `[BLAD] Eventu brakuje: ${L[6] + `/` + L[7]}`)
                return;
            }

            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client))
            } else {
                client.on(event.name, (...args) => event.execute(...args, client))
            }

            await Table.addRow(event.name, "[EVENTY] Event został załadowany!")
            console.log(event)
        })

    console.log(`${Table.toString()}`)


}