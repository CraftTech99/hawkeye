const Discord = require('discord.js');const client = new Discord.Client();
client.on('ready', () => {  
  console.log('I am ready!');
});


client.on('ready', () => {
    client.user.setActivity('https://github.com/CraftTech99/hawkeye', {type: 'Official PlatinumCraft Bot'});
});


  client.on("message", (message) => {
  if (message.content.startsWith("/help")) {
    message.channel.send("type /invite to get the invite link of this server~");
  }

  if (message.content.startsWith("/invite")) {
    message.channel.send("https://discord.gg/qtqE7uZ");
  }
  
  if (message.content.startsWith("invite link pls")) {
    message.channel.send("https://discord.gg/qtqE7uZ");
  }
});

client.login(process.env.BOT_TOKEN);
