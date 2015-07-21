#remove repo if possible
rm -rf lindybot; true
rm -f *.js

git clone https://github.com/paulpjryan/lindybot.git
cd lindybot
npm install
node bot.js
