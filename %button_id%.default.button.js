module.exports = {
    button_id: '%button_id%',
    description: '%button_id% button',
    async execute(interaction) {
        return interaction.reply({ content: 'The %button_id% button was clicked!', ephemeral: false });
    },
};
