const { SlashCommandBuilder, MessageFlags } = require('discord.js');
const { getTranslation, sortGlyphs } = require("../../glypher.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dev_cipher')
		.setDescription('Provides information about the server.')
		.addStringOption(option => 
			option.setName('input')
				.setDescription('TheInput')
				.setRequired(true))
		.addStringOption(option => 
			option.setName('reply')
				.setDescription('reply to a message?'))	
		.addIntegerOption(option =>
			option.setName('height')
				.setDescription("The height of the tablet"))
		.addBooleanOption(option =>
			option.setName('private')
				.setDescription('Should it be only visible to the user'))
		.addBooleanOption(option =>
			option.setName('translation')
				.setDescription('Should it have a translation beneath the glyphs? (It will be marked as spoilers, making them hidden)')),
	async execute(interaction) {
		const input = interaction.options.getString('input');
		const height = interaction.options.getInteger('height');
		try {
			const replyId = interaction.options.getString("reply");
			const targetMessage = await interaction.channel.messages.fetch(replyId);

			await targetMessage.reply({
					content: `\`\`\`\n${sortGlyphs(input, height)}\`\`\`\n${getTranslation(interaction)}`,
				});
			await interaction.reply({
					content: `${input} sent to ${targetMessage.author.username}`,
					flags: MessageFlags.Ephemeral
				});
		} catch (error) {
			await interaction.reply({
			content: `\`\`\`\n${sortGlyphs(input, height)}\`\`\`\n${getTranslation(input, interaction.options.getBoolean('translation'))}`,
			flags: interaction.options.getBoolean('private') ? MessageFlags.Ephemeral : ''
		})
		}
	},
};

