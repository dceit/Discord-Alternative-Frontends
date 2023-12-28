[![BetterDiscord Logo](https://media.discordapp.net/attachments/341062370627682315/1053477174566465567/logo_large_ish.png)](https://betterdiscord.app/)

# What is this?
This is a plugin for BetterDiscord which will replace incoming messages with FOSS alternative frontends.

# What does it replace?
It will find filter messages containing the following text, and update it with the corresponding replacement.
Original | Replacement |
--- | --- |
youtube.com | piped.video 
youtu.be | piped.video 
twitter.com | nitter.net 
x.com | nitter.net 
fxtwitter.com | nitter.net 

# Installation
1. Download the `AlternativeFrontends.plugin.js` file from this repository.
2. Move the plugin file to your BetterDiscord `plugin/` folder.

# Contributing
Contributions are welcome, if you need ideas I am looking to implement the following:
- Implement proper embedding to preview links, rather than nulling it.
- Replacement of all messages links, including old.
