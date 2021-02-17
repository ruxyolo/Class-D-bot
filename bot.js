const Discord = require('discord.js')
const client = new Discord.Client()


let CDnum = 0006


client.on('ready', () => {
    console.log('Bot online')

});

client.on('guildMemberAdd', (member) => {
    console.log('Member added')
    member.roles.add('Class-D')
    console.log(member.nickname)
    console.log(member.id)
    member.nickname = "D-" + String(CDnum)
    console.log(member.nickname)
    CDnum += 1
    console.log("Class-D D-" + `${CDnum}` + " added.")
});

client.on('guildMemberRemove', (member) => {
    CDnum -= 1
    console.log("Class-D D-" + `${CDnum}` + " removed.")
});


client.login(process.env.token)