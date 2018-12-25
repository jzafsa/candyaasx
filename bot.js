


const Discord = require("discord.js");
const client = new Discord.Client();
client.on('message', msg => {

    if (msg.content == 'tainoaaaras1') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('✅'));
     }
    }
}
})
client.on('ready', () => { 
    client.channels.get("512570758497566720").join(); 
    });
 client.login(process.env.BOT_TOKEN); 

