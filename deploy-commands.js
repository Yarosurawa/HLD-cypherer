const { REST, Routes } = require('discord.js');
try {
	const { clientId, guildId, discordToken } = require('./config.json');
	var token = discordToken;
	var appId = clientId;
	var serverId = guildId
} catch (error) {
	var token = process.env.DISCORD_TOKEN;
	var appId = process.env.CLIENT_ID;
	var serverId = process.env.GUILD_ID;
}

const fs = require('node:fs');
const path = require('node:path');

const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath).filter(folder =>
    fs.lstatSync(path.join(foldersPath, folder)).isDirectory()
);

for (const folder of commandFolders.filter(f => f === "dev_commands")) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

const rest = new REST().setToken(token);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);
		const data = await rest.put(
			Routes.applicationGuildCommands(appId, serverId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();
