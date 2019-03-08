const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`Invitation : https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
  })

  client.on("message", message => {
      if(message.content.includes("Salam")){
        if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
        setInterval(function(){
            message.guild.setName("𝗦𝗖𝗣")
        }, 5000)
        setInterval(function(){
        message.guild.setName("𝗦𝗖𝗣 𝗢𝗡")
      }, 5000)
        setInterval(function(){
        message.guild.setName("𝗦𝗖𝗣 𝗢𝗡 𝗧𝗛𝗘")
      }, 5000)
        setInterval(function(){
        message.guild.setName("𝗦𝗖𝗣 𝗢𝗡 𝗧𝗛𝗘 𝗕𝗘𝗔𝗧")
      }, 5000)
      }
  })

  client.login(process.env.TOKEN)
