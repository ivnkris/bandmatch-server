const { Conversation } = require("../models");

const conversations = async (_, { id }) => {
	const conversations = await Conversation.find({
		participants: { $in: id },
	})
		.populate("messages")
		.populate("participants");
	return conversations;
};

module.exports = conversations;
