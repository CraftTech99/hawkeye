const Discord = require ("discord.js")
const bot = new Discord.Client

client.on ("ready", () => {
  console.log ("I Am Ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login(process.env.BOT_TOKEN);
