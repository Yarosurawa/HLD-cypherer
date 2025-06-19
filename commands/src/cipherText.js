const { SlashCommandBuilder, MessageFlags } = require('discord.js');

function charToGlyph(char) {
	switch (char) {
		case "A": case "a" : case "O": case "o" :
			return `█▀█▄
▀▀▀ `
			break;

		case "B": case "b" : case "H": case "h" :
			return `▀▀██
▀▀▀▀`
			break;

		case "C": case "c" : case "Q": case "q" :
			return `█▀██
▀ ▀▀`
			break;
			
		case "D": case "d" : case "T": case "t" :
			return `▀█ ▀
 ▀ ▀`
			break;

		case "E": case "e" : case "U": case "u" :
			return `▀▀█▄
  ▀ `
			break;

		case "F": case "f" : case "V": case "v" :
			return `██ ▀
▀▀ ▀`
			break;

		case "G": case "g" : case "K": case "k" :
			return `█▄ ▄
▀   `
			break;

		case "I": case "i" : case "Y": case "y" :
			return `▀ █▀
▀▀▀▀`
			break;

		case "J": case "j" : case "P": case "p" :
			return `█ █▄
▀▀▀ `
			break;

		case "L": case "l" : case "X": case "x" :
			return `▄█ ▀
 ▀▀▀`
			break;

		case "M": case "m" : case "N": case "n" :
			return `▀█ ▀
▀▀ ▀`
			break;

		case "S": case "s" : case "Z": case "z" :
			return `█▀▀▀
▀ ▀▀`
			break;

		case "R": case "r" : case "W": case "w" :
			return `█▀ █
▀▀ ▀`
			break;

		case ",":
			return ` █  
 ▀  `
			break;

		case ".":
			return ` █▀▀
 ▀ ▀`
		break;

		default:
			return "def"
			break;
	}
}

function sortGlyphs(string, height) {
	let text = "";
	let tabletHeight = height ?? 8;
	let array = Array(tabletHeight*2).fill("\n");
	let counter = 0;
	
	for (let i = 0; i < string.length; i++) {
		const el = string[i];
		if (charToGlyph(el) !== "def") {
			let j = i - counter;
			topHalf = charToGlyph(el).slice(0, 4)
			bottomHalf = charToGlyph(el).slice(5, 10)
			
			array[(j%tabletHeight)*2] = `${array[j%tabletHeight*2].slice(0, Math.floor(j/tabletHeight)*5)}${topHalf + " "}\n`
			array[(j%tabletHeight)*2+1] = `${array[j%tabletHeight*2+1].slice(0, Math.floor(j/tabletHeight)*5)}${bottomHalf + " "}\n`
			text = array.join("").replaceAll(" ", "\u00A0")
		} else {
			counter++
		}
	}
	return text;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cipher')
		.setDescription('Provides information about the server.')
		.addStringOption(option => 
			option.setName('input')
				.setDescription('TheInput')
				.setRequired(true))
		.addIntegerOption(option =>
			option.setName('height')
				.setDescription("The height of the tablet")
		)
		.addBooleanOption(option =>
			option.setName('etheral')
				.setDescription('Should it be ephemeral')),
	async execute(interaction) {
		const input = interaction.options.getString('input');
		const height = interaction.options.getInteger('height');
		await interaction.reply({
			content: `\`\`\`\n${sortGlyphs(input, height)}\`\`\``,
			flags: interaction.options.getBoolean('etheral') ? MessageFlags.Ephemeral : ''
		})
	},
};

