var irc = require("irc");

var config = {
  channels: ["#swingdancing"],
  server:   "irc.freenode.net",
  botName:  "lindybot"
};

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels
});

bot.addListener("join", function(channel, nick) {
  console.log(nick + " joined the channel!");
  bot.say(channel, "Welcome, " + nick + "!");
});
