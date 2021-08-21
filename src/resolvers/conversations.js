const { Conversation } = require("../models");

const conversations = async (_, { id }) => {
	const conversations = await Conversation.find({ participants: { $in: id } });
	return conversations;
};

module.exports = conversations;
