const { SlashCommandBuilder } = require('discord.js');
const UserAlias = require('../schemas/UserAlias');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('username2')
		.setDescription("Shows the user's info")
		.addStringOption((username) =>
			username
				.setName('username')
				.setDescription(
					'The username on the google sheets you want to see the info of',
				)
				.setRequired(true),
		),

	run: async ({ interaction }) => {
		await interaction.deferReply();

		const username = interaction.options.getString('username');

		await UserAlias.updateOne(
			{
				discordId: interaction.user.id,
			},
			{
				sheetName: username,
			},
			{
				upsert: true,
			},
		);

		await interaction.editReply(`saved ${username} to the database`);
	},
};
