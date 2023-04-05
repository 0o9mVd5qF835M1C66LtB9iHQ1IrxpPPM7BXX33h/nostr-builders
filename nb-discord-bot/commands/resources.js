const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Events,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("resources")
    .setDescription("Sends a message with button links to Nostr resources"),
  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Nostr Resources")
        .setStyle(ButtonStyle.Link)
        .setURL("https://nostr-resources.com/")
    );

    await interaction.reply({
      content: "Here are the links:",
      components: [row],
      ephemeral: true,
    });
  },
};
