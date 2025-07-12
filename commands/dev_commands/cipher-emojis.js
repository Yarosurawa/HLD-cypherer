const { SlashCommandBuilder, MessageFlags } = require('discord.js');

class Emoji {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    getEmojiValue() {
        return (`<:${this.name}:${this.id}>  `)
    }
}

const char_A_O = new Emoji("Glyph_A_O", "1387216150634692718");
const char_B_H = new Emoji("Glyph_B_H", "1387216181852635247");
const char_C_Q = new Emoji("Glyph_C_Q", "1387216192552439848");
const char_D_T = new Emoji("Glyph_D_T", "1387216204837552168");
const char_E_U = new Emoji("Glyph_E_U", "1387216215788752966");
const char_F_V = new Emoji("Glyph_F_V", "1387216227784724582");
const char_G_K = new Emoji("Glyph_G_K", "1387216237343408138");
const char_I_Y = new Emoji("Glyph_I_Y", "1387216250710523996");
const char_L_X = new Emoji("Glyph_L_X", "1387216260365942945");
const char_M_N = new Emoji("Glyph_M_N", "1387216271069810779");
const char_P_J = new Emoji("Glyph_P_J", "1387216283535282226");
const char_R_W = new Emoji("Glyph_R_W", "1387216298202759302");
const char_S_Z = new Emoji("Glyph_S_Z", "1387216310722629764");
const char_0 = new Emoji("Glyph_0", "1387216348408451133");
const char_1 = new Emoji("Glyph_1", "1387216359250985050");
const char_2 = new Emoji("Glyph_2", "1387216369451532440");
const char_3 = new Emoji("Glyph_3", "1387216382474588191");
const char_4 = new Emoji("Glyph_4", "1387216394038415490");
const char_5 = new Emoji("Glyph_5", "1387216405052522507");
const char_6 = new Emoji("Glyph_6", "1387216415970431157");
const char_7 = new Emoji("Glyph_7", "1387216427970334852");
const char_8 = new Emoji("Glyph_8", "1387216438925983795");
const char_9 = new Emoji("Glyph_9", "1387216448975409152");

const char_Ampersand = new Emoji("Glyph_Ampersand", "1387216524145852526");
const char_Apostrophe = new Emoji("Glyph_Apostrophe", "1387216535814275132");
const char_Asterisk = new Emoji("Glyph_Asterisk", "1387216547998863420");
const char_At_Symbol = new Emoji("Glyph_At_Symbol", "1387216562666344653");
const char_Backslash = new Emoji("Glyph_Backslash", "1387216573814669322");
const char_Backtick = new Emoji("Glyph_Backtick", "1387216591023898775");
const char_Caret = new Emoji("Glyph_Caret", "1387216616625803465");
const char_Colon = new Emoji("Glyph_Colon", "1387216638172201040");
const char_Comma = new Emoji("Glyph_Comma", "1387216648364359690");
const char_Dollar_sign = new Emoji("Glyph_Dollar_Sign", "1387216659131011125");
const char_Equals_Sign = new Emoji("Glyph_Equals_Sign", "1387216729599643730");
const char_Exclamation_Mark = new Emoji("Glyph_Exclamation_Mark", "1387216754853543946");
const char_Forward_Slash = new Emoji("Glyph_Forward_Slash", "1387216799581343754");
const char_Greater_Than_Sign = new Emoji("Glyph_Greater_Than_Sign", "1387216919546953769");
const char_Left_Curly_Brace = new Emoji("Glyph_Left_Curly_Brace", "1387216996382408805");
const char_Left_Parenthesis = new Emoji("Glyph_Left_Parenthesis", "1387217028447735961");
const char_Left_Square_Bracket = new Emoji("Glyph_Left_Square_Bracket", "1387217051885637703");
const char_Less_Than_Sign = new Emoji("Glyph_Less_Than_Sign", "1387217093996449942");
const char_Minus_Sign = new Emoji("Glyph_Minus_Sign", "1387217123671015474");
const char_Number_Sign = new Emoji("Glyph_Number_Sign", "1387217156202168451");
const char_Percent_Sign = new Emoji("Glyph_Percent_Sign", "1387217156202168451");
const char_Period = new Emoji("Glyph_Period", "1387217207737716839");
const char_Plus_Sign = new Emoji("Glyph_Plus_Sign", "1387217228923142174");
const char_Question_Mark = new Emoji("Glyph_Question_Mark", "1387217272774328380");
const char_Quote_Mark = new Emoji("Glyph_Quote_Mark", "1387217296082075768");
const char_Right_Curly_Brace = new Emoji("Glyph_Right_Curly_Brace", "1387217341015658629");
const char_Right_Parenthesis = new Emoji("Glyph_Right_Parenthesis", "1387217358816411729");
const char_Right_Square_bracket = new Emoji("Glyph_Right_Square_bracket", "1387217373257269350");
const char_Semicolon = new Emoji("Glyph_Semicolon", "1387217387148808242");
const char_Tilde = new Emoji("Glyph_Tilde", "1387217403750125578");
const char_Underscode = new Emoji("Glyph_Underscode", "1387217419969232956");
const char_Vertical_Line = new Emoji("Glyph_Vertical_Line", "1387217432967647302");



function emojiFilter(txt) {
    const map = {
        a: char_A_O.getEmojiValue(), A: char_A_O.getEmojiValue(),  o: char_A_O.getEmojiValue(), O: char_A_O.getEmojiValue(), 
        b: char_B_H.getEmojiValue(), B: char_B_H.getEmojiValue(),  h: char_B_H.getEmojiValue(), H: char_B_H.getEmojiValue(), 
        c: char_C_Q.getEmojiValue(), C: char_C_Q.getEmojiValue(),  q: char_C_Q.getEmojiValue(), Q: char_C_Q.getEmojiValue(), 
        d: char_D_T.getEmojiValue(), D: char_D_T.getEmojiValue(),  t: char_D_T.getEmojiValue(), T: char_D_T.getEmojiValue(), 
        e: char_E_U.getEmojiValue(), E: char_E_U.getEmojiValue(),  u: char_E_U.getEmojiValue(), U: char_E_U.getEmojiValue(), 
        f: char_F_V.getEmojiValue(), F: char_F_V.getEmojiValue(),  v: char_F_V.getEmojiValue(), V: char_F_V.getEmojiValue(),
        g: char_G_K.getEmojiValue(), G: char_G_K.getEmojiValue(),  k: char_G_K.getEmojiValue(), K: char_G_K.getEmojiValue(),
        i: char_I_Y.getEmojiValue(), I: char_I_Y.getEmojiValue(),  y: char_I_Y.getEmojiValue(), Y: char_I_Y.getEmojiValue(),
        l: char_L_X.getEmojiValue(), L: char_L_X.getEmojiValue(),  x: char_L_X.getEmojiValue(), X: char_L_X.getEmojiValue(),
        m: char_M_N.getEmojiValue(), M: char_M_N.getEmojiValue(),  n: char_M_N.getEmojiValue(), N: char_M_N.getEmojiValue(),
        p: char_P_J.getEmojiValue(), P: char_P_J.getEmojiValue(),  j: char_P_J.getEmojiValue(), J: char_P_J.getEmojiValue(),
        r: char_R_W.getEmojiValue(), R: char_R_W.getEmojiValue(),  w: char_R_W.getEmojiValue(), W: char_R_W.getEmojiValue(),
        s: char_S_Z.getEmojiValue(), S: char_S_Z.getEmojiValue(),  z: char_S_Z.getEmojiValue(), Z: char_S_Z.getEmojiValue(),
        0: char_0.getEmojiValue(), 1: char_1.getEmojiValue(), 2: char_2.getEmojiValue(), 3: char_3.getEmojiValue(),
        4: char_4.getEmojiValue(), 5: char_5.getEmojiValue(), 6: char_6.getEmojiValue(), 7: char_7.getEmojiValue(),
        8: char_8.getEmojiValue(), 9: char_9.getEmojiValue(),
        '&': char_Ampersand.getEmojiValue(), "'": char_Apostrophe.getEmojiValue(),
        '*': char_Asterisk.getEmojiValue(), "@": char_At_Symbol.getEmojiValue(),
        '\\': char_Backslash.getEmojiValue(), "`": char_Backtick.getEmojiValue(),
        '^': char_Caret.getEmojiValue(), ":": char_Colon.getEmojiValue(),
        ',': char_Comma.getEmojiValue(), "$": char_Dollar_sign.getEmojiValue(),
        '=': char_Equals_Sign.getEmojiValue(), "!": char_Exclamation_Mark.getEmojiValue(),
        '/': char_Forward_Slash.getEmojiValue(), ">": char_Greater_Than_Sign.getEmojiValue(),
        '{': char_Left_Curly_Brace.getEmojiValue(), "(": char_Left_Parenthesis.getEmojiValue(),
        '[': char_Left_Square_Bracket.getEmojiValue(), "<": char_Less_Than_Sign.getEmojiValue(),
        '-': char_Minus_Sign.getEmojiValue(), "#": char_Number_Sign.getEmojiValue(),
        '%': char_Percent_Sign.getEmojiValue(), ".": char_Period.getEmojiValue(),
        '+': char_Plus_Sign.getEmojiValue(), "?": char_Question_Mark.getEmojiValue(),
        '"': char_Quote_Mark.getEmojiValue(), "}": char_Right_Curly_Brace.getEmojiValue(),
        ')': char_Right_Parenthesis.getEmojiValue(), "]": char_Right_Square_bracket.getEmojiValue(),
        ';': char_Semicolon.getEmojiValue(), "~": char_Tilde.getEmojiValue(),
        '_': char_Underscode.getEmojiValue(), "|": char_Vertical_Line.getEmojiValue(),
    }


    const regex = /[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\{\}\[\]'\"\;\:\`\~\<\>\,\.\/\?\\\|\-\_\+\=]/g
    let text = txt.replace(regex, char => map[char] || char )
    return text
    
}

function sortGlyphs(string, height) {
	let text = "";
	let tabletHeight = height ?? 8;
	let array = Array(tabletHeight).fill("\n");
	let counter = 0;
	
	for (let i = 0; i < string.length; i++) {
		const el = string[i];
		if (el !== " ") {
			let j = i - counter;
			array[j%tabletHeight] = `${array[j%tabletHeight].slice(0, Math.floor(j/tabletHeight))}${el}\n`
	        text = array.join("")
		} else {
			counter++
		}
	}
    text = emojiFilter(text)
	return text;
}

function getTranslation(val) {
	if (val.options.getBoolean('translation') === true) {
		return `## Translation: \n || ${val.options.getString('input')} ||`
	} else {
		return " "
	}
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dev_cipher_emoji')
        .setDescription('Provides information about the server.')
        .addStringOption(option => 
            option.setName('input')
                .setDescription('TheInput')
                .setRequired(true))
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
        await interaction.reply({
            content: `\n${sortGlyphs(input, height)}\n${getTranslation(interaction)}`,
            flags: interaction.options.getBoolean('private') ? MessageFlags.Ephemeral : ''
        })
    },
};
