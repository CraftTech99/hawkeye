const Discord = require('discord.js');const client = new Discord.Client();
client.on('ready', () => {  
  console.log('I am ready!');
});

const prefix = "/";

client.on("message", (message) => {
  
   if (/message.content.startsWith(prefix)) return;
  
  if (message.content.startsWith(prefix + "/help")) {
    message.channel.send("type /invite to get the invite link of this server~");
  } else

  if (message.content.startsWith(prefix + "/invite")) {
    message.channel.send("https://discord.gg/zPZJah");
  }
});

client.login(process.env.BOT_TOKEN);
