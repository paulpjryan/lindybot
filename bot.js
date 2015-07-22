var irc = require("irc");

var config = {
  //channels: ["#lindybot-test"], 	//debug and test channel
  channels: ["#swingdancing"], 		//prod channel
  server:   "irc.freenode.net",
  botName:  "lindybot"
};

var bot = new irc.Client(config.server, config.botName, {
  channels: config.channels,
  realName: config.botName
});

bot.addListener("join", function(channel, nick) {
  console.log(nick + " joined the channel!");
  bot.say(channel, "Welcome, " + nick + "!");
  sendHelp(nick);
});

function isMention(nick, text) {
	if(text.indexOf("#" > -1 && text.indexOf(nick) > -1)) {
		return true;
	}
	return false;
}

function sendHelp(nick) {
	bot.notice(nick, "Welcome to the channel! If nobody is talking, it doesn't mean that no one is here. Send a message or ask a question and get a conversation started!\n NOTE: This message was sent as a private notice. Only you can see it.");
}

bot.addListener('message', function(nick, to, text, message) {
	if(to == config.botName) {
		console.log("lindybot received a message!");
		if(text.indexOf("help") > -1) {
			sendHelp(nick);
		}
	}

	else if(isMention(config.botName, text)) {
		console.log("lindybot got a mention");
	}
});


