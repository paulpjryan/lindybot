#remove repo if possible
rm -rf lindybot; true
rm -f *.js

#download the latest source
git clone https://github.com/paulpjryan/lindybot.git

#install packages and run the bot
cd lindybot
npm install
node bot.js
