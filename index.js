const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');
const { getTranslation, sortGlyphs } = require("./glypher.js");

let token;

try {
	const { discordToken } = require('./config.json');
	token = discordToken || process.env.DISCORD_TOKEN;
} catch (error) {
	token = process.env.DISCORD_TOKEN;
}

console.log(token);


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(token);

client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath).filter(folder =>
	fs.lstatSync(path.join(foldersPath, folder)).isDirectory()
);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
    }
}

client.on(Events.InteractionCreate, async interaction => {
	if (interaction.isChatInputCommand() || interaction.isMessageContextMenuCommand()){

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
			} else {
				await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
			}
		}
	} else if (interaction.isModalSubmit()) {
		if (interaction.customId.startsWith('dev_test_thing-')){
			try {
				const targetMessageId =  interaction.customId.split('-')[1];
				const targetMessage = await interaction.channel.messages.fetch(targetMessageId);
				const input = interaction.fields.getTextInputValue('textInput');

				await targetMessage.reply({
					content: `${input}`,
					ephemeral: true,
				});
			} catch (error) {
				throw error
			}
			
		}	else if (interaction.customId.startsWith('dev_cipher_reply-')) {
			try {
				const targetMessageId =  interaction.customId.split('-')[1];
				const targetMessage = await interaction.channel.messages.fetch(targetMessageId);
				const input = interaction.fields.getTextInputValue('textInput');
				const height = interaction.fields.getTextInputValue('heightInput');
				const bool = interaction.fields.getTextInputValue('translationInput') == ("y" || "Y" || "yes" || "Yes") ? true : false
				
				await targetMessage.reply({
					content: `\`\`\`\n${sortGlyphs(input, height)}\`\`\`\n${getTranslation(input, bool)}`,
				});

				await interaction.reply({
					content: "message sent",
					flags: MessageFlags.Ephemeral
				})
				
			} catch (error) {
				throw error
			}
		}
	}
});

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('alive'));
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
