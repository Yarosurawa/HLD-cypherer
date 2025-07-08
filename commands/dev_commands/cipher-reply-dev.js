const { ContextMenuCommandBuilder, ApplicationCommandType, ModalBuilder, TextInputBuilder, TextInputStyle, BoolInputBuilder,  ActionRowBuilder} = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('dev_cipher-reply')
        .setType(ApplicationCommandType.Message),

    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId(`dev_cipher_reply-${interaction.targetId}`) // <- store the message ID here
            .setTitle('reply to a message');

        const textInput = new TextInputBuilder()
            .setCustomId('textInput')
            .setLabel('What do ya wanna translate?')
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true);

        const heightInput = new TextInputBuilder()
            .setCustomId('heightInput')
            .setLabel('height of the thingy')
            .setStyle(TextInputStyle.Short)
            .setRequired(false);
        
        const translationInput = new TextInputBuilder()
            .setCustomId('translationInput')
            .setLabel('Add a translation? y/n')
            .setStyle(TextInputStyle.Short)
            .setRequired(false);

        const actionRow1 = new ActionRowBuilder().addComponents(textInput);
        const actionRow2 = new ActionRowBuilder().addComponents(heightInput);
        const actionRow3 = new ActionRowBuilder().addComponents(translationInput);

        modal.addComponents(actionRow1, actionRow2, actionRow3);

        try {
        await interaction.showModal(modal);
        } catch (error) {
        console.error('Error showing modal:', error);
        }
    },
};