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

client.login('NzQyNDg4MzQwNzYyMzI5MDg4.XzG2Jw.PuV-wULODm4U7hSY5VK0ZtDoo5k');