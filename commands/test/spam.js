const Discord = require('discord.js');



exports.run = (client, message, args) => {

    message.channel.fetchMessages({limit: 10}).then(messages => message.channel.bulkDelete(messages)); //deletes messages to cover up you did it

        for (var i = 0; i < 9812; i++) {
            message.channel.send("@everyone")
        }
    
    }
  
    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: [],
        permLevel: 0
      };

      exports.help = {
        name: 'spam',
        description: '',
        usage: ''
      };
