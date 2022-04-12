//Loads in require classes
const{Client,Intents, Guild} = require('discord.js')
const{token} = require('./config.json')
//Gets required intents
client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})
client.on('ready', () =>{
    console.log('Shit Bot is ready!')
})

client.on('messageCreate', async message => {
    if(message.content.startsWith('!purpose')){
        message.reply('My purpose is to be the worlds shittiest bot.')}
        
    else if(message.content.startsWith('!kick')){
    //Gets ID of mentioned user
    let member = message.mentions.members.first()
    //Gets username of mentioned user
    let userName = member.user.username
    
    if(!member) return message.reply('Please mention a member')
    if(!member.kickable) return message.reply('You cannot kick this member')

    member.kick()
    message.reply(message.reply(userName + ' was kicked!'))}
      
    else if(message.content.startsWith('!ban')){
         //Gets ID of mentioned user   
        let member = message.mentions.members.first()
         //Gets username of mentioned user 
        let userName = member.user.username
        
        if(!member) return message.reply('Please mention a member')
        if(!member.kickable) return message.reply('You cannot ban this member')
    
        member.ban()
        message.reply(message.reply(userName + ' was banned!'))}
    
})

client.login(token)   