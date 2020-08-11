const Discord = require('discord.js');

const config = require('./config.json');
const client = new Discord.Client(); 

const cmdsArray = [
    "Wakeup - Pings The Bot To Test Connectivity",
    " ",
    "PlaceHolder"
];

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



client.on('message', message => { // Command List Start
    if (!message.content.startsWith(config.prefix)) return;

    const args = message.content.trim().split(/ +/g);
    const command = args[0].slice(config.prefix.length).toLowerCase();
//===============================================================================================================
    if(command == "help"){
        message.reply("Here you go.");
        const embed = new Discord.RichEmbed()
        .addField("Commands", cmdsArray)
        .addField("Info", "Thanks for using this bot, If you need help DM McZarya#0001");
        message.channel.send({embed: embed});
}
//===============================================================================================================
if(command == "wakeup"){ // Check The Bots Connectivity
    message.reply("Fuck off i'm already awake");
}
//===============================================================================================================


}); // Command List End


client.login(config.token);