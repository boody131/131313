const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";
client.login(process.env.BOT_TOKEN);
const devs = ["563128834619211787"];

client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
});

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });

 client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
    if(message.content.startsWith(prefix + 'pl')) {
  client.user.setGame(argresult);
    message.channel.send(`**✅   ${argresult}**`)
} else  
if(message.content.startsWith(prefix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`**✅   ${argresult}**`)
} else 
if(message.content.startsWith(prefix + 'li')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(`**✅   ${argresult}**`)
} else 
if(message.content.startsWith(prefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/SnowCodes");
    message.channel.send(`**✅**`)
}
if (message.content.startsWith(prefix + 'sn')) {
  client.user.setUsername(argresult).then
      message.channel.send(`**✅ Changing The Name To : ${argresult}** `)
} else
if(message.content.startsWith(prefix + 'sa')) {
client.user.setAvatar(argresult);
  message.channel.send(`**✅ Changing The Avatar To : ${argresult}** `);
}
}); 

client.on('message', message => {
  var argresult = message.content.split(` `).slice(0).join(' ');
    if (!devs.includes(message.author.id)) return;

if(message.content.startsWith(prefix + 'ss')) {
  if(!argresult) return message.channel.send('`online` , `DND(Do not Distrub)` , `idle` , `invisible(Offline)` , `🎶 أختر أحد الحالات`');
  client.user.setStatus(argresult);
      message.channel.send(`**✅ Changing The Status To : ${argresult}** `);
}
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(0).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if(message.content.startsWith(prefix + 'help')) {
      message.channel.send('**`pl` For Playing , `wt` For Watching , `li` For Listening , `st` For Streaming , `sn` For Changing The Name , `ma` For Changing The Avatar , `ss` for Changing The Status , `bc` for brodcast , `ping` for see the ping , `help` for helping **');
  }
});

client.on('message', message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
      if(message.content.startsWith(prefix + 'bc')) {
  if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("You dont have Manage Server permission.");
       let filter = m => m.author.id === message.author.id;
   
   let recembed = new Discord.RichEmbed()
   .setTitle(`${client.user.username}`)
   .setDescription(`
   -=-=-=-=-=-=-=-=-=-=
   🎖 برودكاست لرتبة معينة بدون إمبد
   
   🏅 برودكاست لرتبة معينة بإمبد
   
   📭 برودكاست لكل الأعضاء بإمبد
   
   📧 برودكاست لكل الأعضاء بدون إمبد
   
   🔵 برودكاست للاونلاين بدون إمبد
   
   🔷 برودكاست للاونلاين بإمبد
   
   ❌ إلغاء البرودكاست
   -=-=-=-=-=-=-=-=-=-=
   `)
   
   message.channel.sendEmbed(recembed).then(msg => { 
       msg.react('🎖')
       .then(() => msg.react('🏅'))
       .then(() => msg.react('📭'))
       .then(() =>  msg.react('📧'))
       .then(() => msg.react('🔵'))
       .then(() => msg.react('🔷'))
       .then(() => msg.react('❌'))
  
   
               let embedmsgFilter = (reaction, user) => reaction.emoji.name === '📭' && user.id === message.author.id;
   
               let normalmsgFilter = (reaction, user) => reaction.emoji.name === '📧' && user.id === message.author.id;
   
               let cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
   
               let onlyroleFilter = (reaction, user) => reaction.emoji.name === '🎖' && user.id === message.author.id;8
   
               let onlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;8
  
               let embedonlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id;8
  
               let embedonlyroleFilter = (reaction, user) => reaction.emoji.name === '🏅' && user.id === message.author.id;8
   
               let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });
   
               let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });
       
               let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });
   
               let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, { time: 0 });
  
               let onlineonly = msg.createReactionCollector(onlineonlyFilter, { time: 0 });
                   
               let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, { time: 0 });
  
               let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
   
   embedonlineonly.on('collect', r => {
  
      let msge;
      message.channel.send(':pencil: **| قم بكتابة الرسالة :pencil2: **').then(msg => {
      
             message.channel.awaitMessages(filter, {
               max: 1,
               time: 90000,
               errors: ['time']
             })
             .then(collected => {
                 collected.first().delete();
                 msge = collected.first().content;
                 msg.edit('✅ **| [هل تريد البرودكاست بمنشن؟ [نعم او لا **').then(msg => {
                   message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
                   .then(collected => {
                     if(collected.first().content === 'نعم') {
     message.channel.send(`**:white_check_mark: تم إرسال الرسالة للأعضاء :loudspeaker:**`);
     
     
     message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
      var bc = new Discord.RichEmbed()
             .setColor('RANDOM')
             .setTitle(`:mega: New Broadcast`)
             .addField('🔰Server🔰', message.guild.name)
             .addField('🚩Sender🚩', message.author.username)
             .addField('📜Message📜', `${msge}`)
             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
             .setFooter(client.user.username, client.user.avatarURL);
             m.send({ embed: bc })
             m.send(`${m}`)
             
         })
     }})
     if(collected.first().content === 'لا') {
     message.channel.send(`**:white_check_mark: تم إرسال الرسالة للأعضاء  :loudspeaker:**`);
     message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
      var bc = new Discord.RichEmbed()
             .setColor('RANDOM')
             .setTitle(`:mega: New Broadcast`)
             .addField('🔰Server🔰', message.guild.name)
             .addField('🚩Sender🚩', message.author.username)
             .addField('📜Message📜', `${msge}`)
             .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
             .setFooter(client.user.username, client.user.avatarURL);
             m.send({ embed: bc })
             
         })
     }
                   
     })
                 })
             })
         })
   
         
   onlineonly.on('collect', r => {
      let msge;
      message.channel.send(':pencil: **| قم بكتابة الرسالة :pencil2: **').then(msg => {
   
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 90000,
            errors: ['time']
          })
          .then(collected => {
              collected.first().delete();
              msge = collected.first().content;
              msg.edit('✅ **| [هل تريد البرودكاست بمنشن؟ [نعم او لا **').then(msg => {
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
  
                  if(collected.first().content === 'نعم') {
  message.channel.send(`**:white_check_mark: تم إرسال الرسالة للأعضاء  :loudspeaker:**`);
                  
  
  message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
      m.send(`${msge}`) 
  m.send(`${m}`)       
          
      })
  }
  if(collected.first().content === 'لا') {
  message.channel.send(`**:white_check_mark: تم إرسال الرسالة للأعضاء  :loudspeaker:**`);
  message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
      m.send(`${msge}`) 
                  
      })}
  })
  })
          })
      })
  })
  
   embedmsg.on('collect', r => {
       let msge;
    message.channel.send(':pencil: **| قم بكتابة الرسالة :pencil2: **').then(msg => {
    
           message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
           .then(collected => {
               collected.first().delete();
               msge = collected.first().content;
               msg.edit('✅ **| [هل تريد البرودكاست بمنشن؟ [نعم او لا **').then(msg => {
                 message.channel.awaitMessages(filter, {
                   max: 1,
                   time: 90000,
                   errors: ['time']
                 })
                 .then(collected => {
                   if(collected.first().content === 'نعم') {
   message.channel.send(`**:white_check_mark: تم إرسال الرسالة للأعضاء  :loudspeaker:**`);
   
   
       message.guild.members.forEach(m => {
           var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           m.send(`${m}`)
           
       })
   }})
   if(collected.first().content === 'لا') {
   message.channel.send(`**:white_check_mark: تم إرسال الرسالة للأعضاء  :loudspeaker:**`);
       message.guild.members.forEach(m => {
           var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           
       })
   }
                 
   })
               })
           })
       })
   
   
      
   
   
   
   normalmsg.on('collect', r => {
       let msge;
       message.channel.send(':pencil: **| قم بكتابة الرسالة :pencil2: **').then(msg => {
    
           message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
           .then(collected => {
               collected.first().delete();
               msge = collected.first().content;
               msg.edit('✅ **| [هل تريد البرودكاست بمنشن؟ [نعم او لا **').then(msg => {
                 message.channel.awaitMessages(filter, {
                   max: 1,
                   time: 90000,
                   errors: ['time']
                 })
                 .then(collected => {
   
                   if(collected.first().content === 'نعم') {
   message.channel.send(`**:white_check_mark: تم إرسال الرسالة للأعضاء  :loudspeaker:**`);
                   
   
       message.guild.members.forEach(m => {
   m.send(`${msge}`) 
   m.send(`${m}`)       
           
       })
   }
   if(collected.first().content === 'لا') {
   message.channel.send(`**:white_check_mark: تم إرسال الرسالة للأعضاء  :loudspeaker:**`);
       message.guild.members.forEach(m => {
           m.send(`${msge}`) 
                   
       })}
   })
   })
           })
       })
   })
   
   onlyrole.on('collect', r => {
       let msge;
       let role;
       message.channel.send(':pencil: **| قم بكتابة الرسالة :pencil2: **').then(msg => {
    
           message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
   
           .then(collected => {
               collected.first().delete();
               msge = collected.first().content;
                   msg.edit('✅ **| إكتب اسم الرتبة**').then(msg => {
                   message.channel.awaitMessages(filter, {
                       max: 1,
                       time: 90000,
                       errors: ['time']
                     })
           
           .then(collected => {
               collected.first().delete();
               role = collected.first().content;
                   let rolecheak = message.guild.roles.find('name', `${role}`)
               msg.edit('✅ **| [هل تريد البرودكاست بمنشن؟ [نعم او لا **').then(msg => {
                 message.channel.awaitMessages(filter, {
                   max: 1,
                   time: 90000,
                   errors: ['time']
                 })
                 .then(collected => {
   
                   if(collected.first().content === 'نعم') {
   message.channel.send(`**:white_check_mark: تم إرسال الرسالة للأعضاء  :loudspeaker:**`);
                   
   
               message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
   
   m.send(`${msge}`) 
   m.send(`${m}`)       
           
       })
   }
   if(collected.first().content === 'لا') {
   message.channel.send(`**:white_check_mark: تم إرسال الرسالة للأعضاء  :loudspeaker:**`);
           message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
   
           m.send(`${msge}`) 
                   
       })}
   })
   })
           })
       })
   })
   })
   });
   
   
   
   embedonlyrole.on('collect', r => {
       let msge;
       let role;
       message.channel.send(':pencil: **| قم بكتابة الرسالة :pencil2: **').then(msg => {
    
           message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
   
           .then(collected => {
               collected.first().delete();
               msge = collected.first().content;
                   msg.edit('✅ **| اكتب اسم الرتبة**').then(msg => {
                   message.channel.awaitMessages(filter, {
                       max: 1,
                       time: 90000,
                       errors: ['time']
                     })
           
           .then(collected => {
               collected.first().delete();
               role = collected.first().content;
                   let rolecheak = message.guild.roles.find('name', `${role}`)
               msg.edit('✅ **| [هل تريد البرودكاست بمنشن؟ [نعم او لا **').then(msg => {
                 message.channel.awaitMessages(filter, {
                   max: 1,
                   time: 90000,
                   errors: ['time']
                 })
                 .then(collected => {
   
                   if(collected.first().content === 'نعم') {
   message.channel.send(`**:white_check_mark: تم إرسال الرسالة للأعضاء  :loudspeaker:**`);
                   
   
                       message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                           var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
   m.send(`${m}`)       
           
       })
   }
   if(collected.first().content === 'لا') {
   message.channel.send(`**:white_check_mark: تم إرسال الرسالة للأعضاء  :loudspeaker:**`);
   message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
           var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           
                   
       })}
   })
   })
           })
       })
   })
   })
   })
       cancel.on('collect', r => {
           let cancelembed = new Discord.RichEmbed()
           .setTitle('Successfully Canceled :x:')
        message.channel.sendEmbed(cancelembed)
           embedmsg.stop();
           normalmsg.stop();
           onlyrole.stop();
           embedonlyrole.stop();
           embedonlineonly.stop()
           onlineonly.stop()
           cancel.stop();
       })
   })
      }});