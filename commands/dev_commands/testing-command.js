const { SlashCommandBuilder,  ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dev_testing')
		.setDescription('does whatever the hell I\'m testing right now'),
		// .addStringOption(option => 
        //     option.setName('input')
        //         .setDescription('TheInput')
        //         .setRequired(true))
		// .addStringOption(option => 
        //     option.setName('reply')
        //         .setDescription('reply to who?')
        //         .setRequired(true))
		// .addBooleanOption(option => 
		// 	option.setName("private")
		// 		.setDescription('private')
		// ),
	async execute(interaction) {
		const modal = new ModalBuilder()
					.setCustomId("modalId")
					.setTitle('modal thingy ig');
		
				const textInput = new TextInputBuilder()
					.setCustomId('textInput')
					.setLabel("What do ya wanna translate?")
					.setStyle(TextInputStyle.Paragraph);
		
				const actionRow = new ActionRowBuilder().addComponents(textInput);
		
				modal.addComponents(actionRow);
		
				await interaction.showModal(modal);
		}
	}
