require('dotenv').config();
const path = require('path');
const { Client, IntentsBitField } = require('discord.js');
const { CommandKit } = require('commandkit');
const mongoose = require('mongoose');

const client = new Client({
	intents: [
		IntentsBitField.Flags.MessageContent,
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
	],
});

(async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			dbName: 'discord-bot',
		});
		console.log('Connected to DB.');

		new CommandKit({
			client,
			commandsPath: path.join(__dirname, 'commands'),
			// eventsPath: path.join(__dirname, 'events'),
			devGuildIds: ['773124995684761630'],
			devUserIds: ['442795347849379879'],
			bulkRegister: true,
		});

		client.login(process.env.TOKEN);
	} catch (error) {
		console.error('An error occurred:', error);
		process.exit(1);
	}
})();
