const { SlashCommandBuilder, MessageFlags} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dev_help')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		console.log(interaction);
		await interaction.reply({
			content:interaction.user.username,
			flags: MessageFlags.Ephemeral
		});
	},
};
