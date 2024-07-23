const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('discord')
		.setDescription('Sends the link to the Hard List Discord server'),

	run: ({ interaction }) => {
		const link = null;
		interaction.reply(`${link}`);
	},
};
