const Discord = require('discord.js');

const config = require('./config.json');
const client = new Discord.Client(); 

const cmdsArray = [
    "Wakeup - Pings The Bot To Test Connectivity",
    " ",
    "Kick - Kicks a specified user from the server",
    " ",
    "Ban - Bans a specified user from the server",
    " ",
    "GitHub - Send a link to the bots GitHub",
    " "
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
        .addField("Further Support", "Thanks for using this bot, If you need Further help DM McZarya#0001");
        message.channel.send({embed: embed});
}
//===============================================================================================================
if(command == "wakeup"){ // Check The Bots Connectivity
    message.reply("Fuck off i'm already awake");
}
//===============================================================================================================
if(command == "github"){ // Sends a link to the bots GitHub repository 
    message.reply("you can find the bots GitHub repository at: https://github.com/McZarya/Nyaakuza-Bot");
}
//===============================================================================================================
if(command == "kick") { // Kicks a specified user
    if(message.channel.type === 'DM') { // Check if message channel is a direct message 
        message.channel.send("I can't kick from DM's. Try again in the server"); // this causes the bot to stroke out and crash if DMed... Too Bad!!!
        return;
    };

    if(!message.member.hasPermission('KICK_MEMBERS')) { // Checks if the user have permission to kick
        message.channel.send("You are overstepping your bounds! (You don't have permission todo that)");
        return;
    };

    let mentionMember = message.mentions.members.first();
    if(!mentionMember) { // Shows this error if user doesn't mention a memeber
        message.channel.send("This isn't a game of russian roulette, who do you want me to kick");
        return;
    }

    // Compare's dick sizes (See's who has the higher role)
    let authorHighestRole = message.member.highestRole.position;
    let mentionHighestRole = mentionMember.highestRole.position;

    if(mentionHighestRole >= authorHighestRole) { // shows this error message if the mentioned user has the same role or a higher role
        message.channel.send("You can't kick people with a equal or a higher position then yourself");
        return;
    };

    if(!mentionMember.kickable) { // Shows this error if the bot can't kick the user  
        message.channel.send("I don't have permissions to kick this user");
        return
    };

    mentionMember.kick() // If all steps are completed successfully tries to kick the user
        .catch(console.error);
        message.channel.send(mentionMember + " has successfully been kicked by " + message.member + "!");
    };

//===============================================================================================================
if(command == "ban") { // Ban a specified user
    if(message.channel.type === 'DM') { // Check if message channel is a direct message 
        message.channel.send("I can't ban from DM's. Try again in the server"); // this causes the bot to stroke out and crash if DMed... Too Bad!!!
        return;
    };

    if(!message.member.hasPermission('BAN_MEMBERS')) { // Checks if the user have permission to ban
        message.channel.send("You are overstepping your bounds! (You don't have permission todo that)");
        return;
    };

    let mentionMember = message.mentions.members.first();
    if(!mentionMember) { // Shows this error if user doesn't mention a memeber
        message.channel.send("This isn't a game of russian roulette, who do you want me to ban");
        return;
    }

    // Compare's dick sizes (See's who has the higher role)
    let authorHighestRole = message.member.highestRole.position;
    let mentionHighestRole = mentionMember.highestRole.position;

    if(mentionHighestRole >= authorHighestRole) { // shows this error message if the mentioned user has the same role or a higher role
        message.channel.send("You can't ban people with a equal or a higher position then yourself");
        return;
    };

    if(!mentionMember.bannable) { // Shows this error if the bot can't ban the user  
        message.channel.send("I don't have permissions to ban this user");
        return
    };

    mentionMember.ban() // If all steps are completed successfully tries to ban the user
        .catch(console.error);
        message.channel.send(mentionMember + " has successfully been ban by " + message.member + "!");
    };
}); // Command List End


client.login(config.token);