const TeleBot = require('telebot');
const bot = new TeleBot('5460867337:AAHTbKVL8bhjg-cWEe_Sw4JIPJ-uhdtGmNg');


bot.on('text', (msg) => msg.reply.text(msg.text));
bot.on('/start', (msg) => msg.reply.text("kya haal h???"));
bot.on('/register', (msg) => msg.reply.text("enter your email ID like this  : /register ad@gmail.com"));
// bot.on('text', (msg) => msg.reply.text(msg.text));
// bot.on('text', (msg) => msg.reply.text(msg.text));

bot.start();