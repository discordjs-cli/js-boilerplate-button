module.exports = {
    name: '%button_name%',
    description: '%button_name% button',
    async execute(interaction) {
        return interaction.reply({ content: 'The %button_name% button was clicked!', ephemeral: false });
    },
};
