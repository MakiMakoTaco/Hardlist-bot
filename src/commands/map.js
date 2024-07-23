const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('map')
		.setDescription('Shows the maps of a chosen tier')
		.addStringOption((map) =>
			map
				.setName('map')
				.setDescription('The map name')
				.setAutocomplete(true)
				.setRequired(true),
		),

	run: async ({ interaction }) => {
		const map = interaction.options.getString('map');

		await interaction.reply(`You have chosen the map ${map}.`);
	},
};
