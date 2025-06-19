const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		console.log(interaction);
		await interaction.reply({
			content:interaction.user,
			flags: MessageFlags.Ephemeral
		});
	},
};
