const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("!")
bot.on("ready", function(){
    bot.user.setGame("Commande: :help");
    console.log("Connected")
});

bot.login("NjQ0OTgwNzg2NjA0NDA4ODQy.XdUzAg.Gdm6Xp2r8ynd7Ia8LlDR9s_Qtrg");


bot.on("message", message =>{
    (message.content === prefix + "help")
    message.channel.sendMessage("liste des commandes /m |tt /m :fabriquant")
})

    (message.content === prefix + "tt")
    message.channel("Création du bot le _15/11/19_ à _18h51_")
    console.log("Commande effectué");

    (message.content === prefix + "fabriquant")
    message.reply("_ce bot à été crée par KomajiroCraft_")
    commande.log("commande effectué");
