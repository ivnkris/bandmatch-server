const { Schema, model } = require("mongoose");

const schema = {
	participants: [
		{
			type: Schema.Types.ObjectId,
			ref: "MusicianUser",
		},
	],
	messages: [
		{
			type: Schema.Types.ObjectId,
			ref: "Message",
		},
	],
};
const conversationSchema = new Schema(schema);

const Conversation = model("Conversation", conversationSchema);

module.exports = Conversation;
