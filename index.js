const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ownerID = `350772260031954944`;
const prefix = `z!` ;
var comandos = new Discord.Collection();

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
    client.user.setGame(`🎈 Gamers Community | z!ajuda 🎈`, 'https://twitch.tv/ZiraMC')
})


    console.log('O Bot foi iniciado com sucesso.'.green);
    console.log(`O meu prefixo é ${prefix}`);
  
client.on('message', message => {
    if(message.content.startsWith("z!serverinfo")){
        let sicon = message.guild.iconURL;
        let serverembed = new Discord.RichEmbed()
        
        .setColor("#15f153")
        .setThumbnail(sicon)
        .addField(":wave: Informções Do Servidor", "Veja As Informações Do Servidor !") // By Super
        .addField(":rocket: Nome do Server:", message.guild.name) // By Super
        .addField(":crown: Criador:", message.guild.owner) // By Super
        .addField(":date: Criado Em:", message.guild.createdAt) // By Super
        .addField(":star2: Você Entrou Em:", message.member.joinedAt) // By Super
        .addField(":earth_americas: Região Do Servidor:", message.guild.region) // By Super
        .addField(":bust_in_silhouette: Membros No Servidor:", message.guild.memberCount); // By Super
    
        return message.channel.send(serverembed);
      }
});


client.on('message', message => {

    var autor = message.author;
    var msg = message.content.toUpperCase();
    var cont = message.content.slice(prefix.lenght).split('');

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
    message.delete();

});


