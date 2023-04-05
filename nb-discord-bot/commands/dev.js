const { SlashCommandBuilder } = require("discord.js");
const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Events,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("dev")
    .setDescription("Sends a message with button links to Github etc"),
  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Nostr Protocol Github")
        .setStyle(ButtonStyle.Link)
        .setURL("https://github.com/nostr-protocol/nostr"),
      new ButtonBuilder()
        .setLabel("NIPs")
        .setStyle(ButtonStyle.Link)
        .setURL("https://github.com/nostr-protocol/nips")
    );

    await interaction.reply({
      content: "Here are the links:",
      components: [row],
      ephemeral: true,
    });
  },
};
