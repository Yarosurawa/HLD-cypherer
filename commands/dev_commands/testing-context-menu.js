const { ContextMenuCommandBuilder, ApplicationCommandType, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder} = require('discord.js');

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName('dev_reply')
    .setType(ApplicationCommandType.Message),

  async execute(interaction) {
    const modal = new ModalBuilder()
      .setCustomId(`dev_test_thing-${interaction.targetId}`) // <- store the message ID here
      .setTitle('reply to a message');

    const textInput = new TextInputBuilder()
      .setCustomId('textInput')
      .setLabel('What do ya wanna translate?')
      .setStyle(TextInputStyle.Paragraph)
      .setRequired(true);

    const actionRow = new ActionRowBuilder().addComponents(textInput);
    modal.addComponents(actionRow);

    try {
      await interaction.showModal(modal);
    } catch (error) {
      console.error('Error showing modal:', error);
    }
  },
};