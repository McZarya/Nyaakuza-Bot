const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => { // Shit to be spammed in Console upon launch.
    console.log('====================================================================================================')
    console.log("McZarya's Nyaakuza Bot V1.0.0");
    console.log("Created By Reflux Software Developments And Developed By McZarya.")
    console.log("Reflux Software Developments or its employees not responsible for anything you do with this bot.")
    console.log('====================================================================================================')
    console.log('Ready To Surppress the masses');
    console.log('====================================================================================================')
    
    client.user.setStatus('idle') //Bot's status and game/streaming. dnd, idle, online
    client.user.setPresence({
        game: {
            name: 'Under Construction ',
            type: "Playing", // Playing, Listening, Watching, STREAMING
			// url: "URL Here" <- link for stream when using the 'STREAMING' status
        }
    });
});

/* client.on("message", (message) => { // Pulls the Config.json file into the main bot.js
    if(config.restrictToID == true && message.author.id != config.id) return;

    if(message.channel.type == "dm") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
}); */

client.on('message', message => { // Check The Bots Connectivity
	if (message.content === "wakeup") { 
        message.channel.send("Fuck off i'm already awake")
        .catch(e => {
            message.channel.send("An error occured!... Too Bad!!!");
          });
	}
});

client.login('');