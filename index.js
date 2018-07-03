const Discord = require('discord.js');
const prefix = process.env.BOT_PREFIX
const client = new Discord.Client();
client.on('ready', () => {  
  console.log('I am ready!');
});

client.on('ready', () => {
        client.user.setGame('PlatinumCraft');
    });

client.on("message", (message) => {
  
  if (message.content.startsWith(`${prefix}help`)) {
    message.channel.send("type /invite to get the invite link of this server~ <#458139598556758016>");
  } else

  if (message.content.startsWith(`${prefix}invite`)) {
    message.channel.send("https://discord.gg/zPZJah");
  }
});

client.login(process.env.BOT_TOKEN);
