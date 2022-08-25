module.exports = {
    button_id: '%button_name%',
    description: '%button_name% role button',
    async execute(interaction) {
        return interaction.reply({ content: 'The %button_name% button was clicked!', ephemeral: false });
    },
};
