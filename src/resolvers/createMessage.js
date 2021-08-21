const { Message, Conversation } = require("../models");

const createMessage = async (_, { input }) => {
	const senderId = input.senderId;
	const text = input.text;
	const recipientId = input.recipientId;

	const message = await Message.create({ senderId, text });
	const conversations = await Conversation.find({});

	if (conversations) {
		const foundConversation = conversations.find(
			(conversation) =>
				conversation.participants.includes(senderId) &&
				conversation.participants.includes(recipientId)
		);

		if (foundConversation) {
			await Conversation.findByIdAndUpdate(foundConversation._id, {
				$push: { messages: message._id },
			});
		} else {
			await Conversation.create({
				participants: [senderId, recipientId],
				messages: [message._id],
			});
		}
	} else {
		await Conversation.create({
			participants: [senderId, recipientId],
			messages: [message._id],
		});
	}

	return message;
};

module.exports = createMessage;
