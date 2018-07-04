const Discord = require('discord.js');
const prefix = process.env.BOT_PREFIX
const client = new Discord.Client();
client.on('ready', () => {  
  console.log('I am ready!');
});

client.on('ready', () => {
        client.user.setGame('PlatinumCraft | /help');
    });

client.on("message", (message) => {
  
  if (message.content.startsWith(`${prefix}help`)) {
    message.channel.send("```My Commands``````/invite```and if u want to know about the server please see these channels: <#458139412249968641>, <#458139598556758016>");
  } 
 

  if (message.content.startsWith(`${prefix}invite`)) {
    message.channel.send("https://discord.gg/zPZJah");
  }
});

client.login(process.env.BOT_TOKEN);
