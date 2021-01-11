const Discord = require('discord.js');  
const token = 'oauth key here';

const client = new Discord.Client();

client.on('message', (msg) => {             
    if (msg.content === '') {                   /// set strings, phrase as commands with !
        msg.channel.send(` ${msg.author}!`);    /// replies to whoever sendt the command.
    }
});





client.on('ready', () => {
    console.log('');

///    client.channels.find(x => x.name === 'Server name').send('');
});

client.login(token);


/* this program depends on the discord.js NodeJS repo, install it manually by opening your shell terminal and run the following command
in the specified folder you want to use for the bot, example => "C:/User/Documents/TheBotGoesHere" 
change the directory to said folder and run the command "npm i discord.js" 
using the discord API: https://www.youtube.com/watch?v=AQvdfRwbq58
DevCoffee tutorial: https://www.youtube.com/watch?v=TaB2UDdX5Bw - super explanatory.
*/
