const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tier')
		.setDescription('Shows the maps of a chosen tier')
		.addIntegerOption((tier) =>
			tier
				.setName('tier')
				.setDescription('The tier you want to see the maps of')
				.setMinValue(1)
				.setMaxValue(3)
				.setRequired(true),
		)
		.addStringOption((subtier) =>
			subtier
				.setName('subtier')
				.setDescription('The subtier of maps')
				.setChoices(
					{ name: 'low', value: 'low' },
					{ name: 'high', value: 'high' },
				),
		),

	run: async ({ interaction }) => {
		const tier = interaction.options.getInteger('tier');
		const subtier = interaction.options?.getString('subtier');

		await interaction.reply(
			`You have chosen tier ${tier} and ${
				subtier ? `subtier ${subtier}` : 'no subtier'
			}.`,
		);
	},
};
