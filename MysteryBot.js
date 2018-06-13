const botSettings = require("./mysterysettings.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", () => {
	console.log('Mystery has booted up...');
});

bot.on("ready", () => { bot.user.setActivity('Hello World!') })

bot.on("message", message => {
	if(message.content.toLowerCase() === 'mystery')
		message.channel.send('Hello! I am Mystery! :bear:');
});

bot.on("message", message => {

	if(message.content.toLowerCase() === 'ping the bear')
		message.channel.send('I cant help you with that... :confounded: ');
});

bot.on("message", message => {

	if(message.content.toLowerCase() === 'bears unite')
		message.channel.send('***RAWR***');
});
bot.login(botSettings.token);