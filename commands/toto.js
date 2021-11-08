const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('toto')
		.setDescription('Replies with tata!'),
	async execute(interaction) {
		await interaction.reply('tata!');
	},
};