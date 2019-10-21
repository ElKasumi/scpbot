const Discord = require("discord.js");
const bot = new Discord.Client();
var prefix = 'fdp!'

bot.on("ready", () => {
    console.log('╔[═════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Connecté sur [ " ${bot.user.username} " ]`);
    console.log('')
    console.log('Informations :')
    console.log('')
    console.log(`Servers : [ " ${bot.guilds.size} " ]`);
    console.log(`Users : [ " ${bot.users.size} " ]`);
    console.log(`Channels : [ " ${bot.channels.size} " ]`);
    console.log(`Lien d'invitation : [ " https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&permissions=8&scope=bot " ]`)
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
})

bot.on('message', async message =>{
    if(message.content.startsWith(prefix + 'mpall')){
        message.delete();
        if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
        var args = message.content.split(" ").slice(1);
        message.guild.members.map(m => m.send(args))
    }
})

bot.login(process.env.TOKEN)
