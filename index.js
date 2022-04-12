//Loads in require classes
const{Client,Intents} = require('discord.js')
const{token} = require('./config.json')
//Gets required intents
client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})

client.on('ready', () =>{
    console.log('Shit Bot is ready!')
})

client.on('messageCreate', async message => {
    if(message.content.startsWith('!purpose')){
        message.reply('My purpose is to be the worlds shittiest bot.')
    }
})

client.login(token)