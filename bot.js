const Discord = require('discord.js')
const client = new Discord.Client()


let CDnum = 0000


client.on('ready', () => {
    console.log('Bot online')

});

client.on('guildMemberAdd', (member) => {
    member.roles.add('Class-D')
    member.nickname = "D-" + String(CDnum)
    CDnum += 1
    console.log("Class-D " + `${CDnum}` + " added.")
});

client.on('guildMemberRemove', (member) => {
    CDnum -= 1
    console.log("Class-D " + `${CDnum}` + " removed.")
});


client.login(process.env.token)