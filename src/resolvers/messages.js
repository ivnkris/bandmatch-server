const { Message } = require("../models");

const messages = async (_, { id }) => {
	const messages = await Message.find({ id });

	return messages;
};

module.exports = messages;
