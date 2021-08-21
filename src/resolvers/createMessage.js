const { Message } = require("../models");

const createMessage = async (_, { input }) => {
	const message = await Message.create(input);

	return message;
};

module.exports = createMessage;
